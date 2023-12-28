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
	const root = path.join('_posts')  // const root = path.join('_posts', 'notion');  // set root at _post/notion
	fs.mkdirSync(root, { recursive: true })

	const databaseId = process.env.DATABASE_ID;
	// query data from notion
	const filterTimeAfter = truncateMinutesToZero();
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			timestamp: "last_edited_time",
			"last_edited_time": {
				"after": filterTimeAfter
			}
		}
	})
	for (const r of response.results) {
		if (r.properties?.['Publish']?.['checkbox']) { // update publish == true
			const id = r.id;
			// date
			let date = moment(r.created_time).format("YYYY-MM-DD");
			let pDate = r.properties?.['Date']?.['date']?.['start']
			if (pDate) {
				date = moment(pDate).format('YYYY-MM-DD')
			}
			// title
			let title = r.Post
			let pTitle = r.properties?.['Post']?.['title']
			if (pTitle?.length > 0) {
				title = pTitle[0]?.['plain_text']
			}
			// subtitle
			let subtitle = r.properties?.['Subtitle']?.['rich_text'][0]?.['plain_text']
			if (typeof subtitle == 'undefined') {
				subtitle = ''
			}
			// sagecell
			let sagecell = r.properties?.['Sagecell']?.['checkbox']
			// tags
			let tags = []
			let pTags = r.properties?.['Tags']?.['multi_select']
			for (const t of pTags) {
				const n = t?.['name']
				if (n) {
					tags.push(n)
				}
			}
			// categories
			let cats = []
			let pCats = r.properties?.['Categories']?.['multi_select']
			for (const t of pCats) {
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
			const mdBlocks = await n2m.pageToMarkdown(id);
			const md = n2m.toMarkdownString(mdBlocks);

			//writing to file
			const fTitle = `${date}-${title.replaceAll(' ', '-').toLowerCase()}.md`;
			fs.writeFile(path.join(root, fTitle), fm + md.parent + sagecell, (err) => {
				if (err) {
					console.log(err);
				}
			});
		} else { // delete publish == false 
			// date
			let date = moment(r.created_time).format("YYYY-MM-DD")
			let pDate = r.properties?.['Date']?.['date']?.['start']
			if (pDate) {
				date = moment(pDate).format('YYYY-MM-DD')
			}
			// title
			let title = r.Post
			let pTitle = r.properties?.['Post']?.['title']
			if (pTitle?.length > 0) {
				title = pTitle[0]?.['plain_text']
			}
			// delete file
			const fTitle = `${date}-${title.replaceAll(' ', '-').toLowerCase()}.md`;
			fs.unlink(path.join(root, fTitle), (err => {
				// Do nothing
			}));	
		}
	}
})();