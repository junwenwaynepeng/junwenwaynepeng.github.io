const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require('moment');
const path = require('path');
const fs = require('fs');

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

function truncateMinutesToZero() {
  const currentDateTime = new Date();
  
  // Truncate the minutes part to zero
  currentDateTime.setMinutes(0);

  // Format the date and time as "YYYY-MM-DDTHH:00"
  const formattedDateTime = currentDateTime.toISOString().slice(0, 16);

  return formattedDateTime;
}


(async () => {
	// ensure directory exists
	const root = path.join('_posts', 'notion')
	fs.mkdirSync(root, { recursive: true })

	const databaseId = process.env.DATABASE_ID;
	// query data from notion
	const filter_time_after = truncateMinutesToZero();
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			timestamp: "last_edited_time",
			"last_edited_time": {
				"after": filter_time_after
			}
		}
	})
	console.log(response.results)
	for (const r of response.results) {
		const id = r.id;
		// date
		let date = moment(r.created_time).format("YYYY-MM-DD");
		let pdate = r.properties?.['Date']?.['date']?.['start']
		if (pdate) {
			date = moment(pdate).format('YYYY-MM-DD')
		}
		// title
		let title = r.Post
		let ptitle = r.properties?.['Post']?.['title']
		if (ptitle?.length > 0) {
			title = ptitle[0]?.['plain_text']
		}
		// subtitle
		let subtitle = r.properties?.['Subtitle']?.['rich_text'][0]?.['plain_text']
		if (typeof subtitle == 'undefined') {
			subtitle = ''
		}
		// Sagecell
		let sagecell = r.properties?.['Sagecell']?.['checkbox']
		// tags
		let tags = []
		let ptags = r.properties?.['Tags']?.['multi_select']
		for (const t of ptags) {
			const n = t?.['name']
			if (n) {
				tags.push(n)
			}
		}
		// categories
		let cats = []
		let pcats = r.properties?.['Categories']?.['multi_select']
		for (const t of pcats) {
			const n = t?.['name']
			if (n) {
				tags.push(n)
			}
		}
		// comments
		const comments = r.properties?.['No Comments']?.['checkbox'] == false
		// frontmatter
		let fmTags = '';
		let fmCats = '';
		let fmHeadPackage = '';
		if (tags.length > 0) {
			fmTags += '\ntags:\n'
			for (const t of tags) {
				fmTags += '  - ' + t + '\n';
			}
		}
		if (cats.length > 0) {
			fmCats += '\ncategories:\n'
			for (const t of cats) {
				fmCats += '  - ' + t + '\n';
			}
		}
		if (sagecell) {
			sagecell = 'sagecell: true';
			fmHeadPackage += 'head-package:\n';
			fmHeadPackage += '  -\n';
			fmHeadPackage += '    file: "package/sagecell.html"' + '\n';
		} else {
			sagecell = '';
		}
		const fm = `---
id: ${id}
comments: ${comments}
date: ${date}
title: ${title}
subtitle: ${subtitle}${fmTags}${fmCats}${fmHeadPackage}${sagecell}
---
`
		const mdblocks = await n2m.pageToMarkdown(id);
		const md = n2m.toMarkdownString(mdblocks);

		//writing to file
		const ftitle = `${date}-${title.replaceAll(' ', '-').toLowerCase()}.md`;
		fs.writeFile(path.join(root, ftitle), fm + md.parent + sagecell, (err) => {
			if (err) {
				console.log(err);
			}
		});
	}
	// Delete files
	const deleteFiles = await notion.databases.query({
		database_id: databaseId,
		filter: {
			timestamp: "last_edited_time",
			"last_edited_time": {
				"after": "2023-12-27T15:50"
			}
		}
	})
	for (const r of deleteFiles.results) {
		console.log(moment(r.last_edited_time).format("YYYY-MM-DD:HH"))
		// date
		let date = moment(r.created_time).format("YYYY-MM-DD")
		let pdate = r.properties?.['Date']?.['date']?.['start']
		if (pdate) {
			date = moment(pdate).format('YYYY-MM-DD')
		}
		// title
		let title = r.Post
		let ptitle = r.properties?.['Post']?.['title']
		if (ptitle?.length > 0) {
			title = ptitle[0]?.['plain_text']
		}
		// delete file
		const ftitle = `${date}-${title.replaceAll(' ', '-').toLowerCase()}.md`;
		try {
			fs.unlink(path.join(root, ftitle), (err => {
				console.log('file deleted')
			}));	
		} catch (err) {
			console.log('file does not exist')
		}
		
	}
})();