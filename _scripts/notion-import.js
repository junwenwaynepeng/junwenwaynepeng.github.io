const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const moment = require('moment');
const path = require('path');
const fs = require('fs');
// or
// import {NotionToMarkdown} from "notion-to-md";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
	// ensure directory exists
	const root = path.join('_posts', 'notion')
	fs.mkdirSync(root, { recursive: true })

	const databaseId = process.env.DATABASE_ID;
	// TODO has_more
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			property: "Publish",
			checkbox: {
				equals: true
			}
		}
	})
	for (const r of response.results) {
		// console.log(r)
		const id = r.id
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
		// Sagecell
		let sagecell = r.Sagecell

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
			fmHeadPackage += 'head-package:';
			fmHeadPackage += '-file:"package/sagecell.html"';
		}
		const fm = `---
layout: post
comments: ${comments}
date: ${date}
title: ${title}${fmTags}${fmCats}
${fmHeadPackage}
---
`
		const mdblocks = await n2m.pageToMarkdown(id);
		const md = n2m.toMarkdownString(mdblocks);

		//writing to file
		const ftitle = `${date}-${title.replaceAll(' ', '-').toLowerCase()}.md`
		fs.writeFile(path.join(root, ftitle), fm + md.parent + sagecell, (err) => {
			if (err) {
				console.log(err);
			}
		});
	}
})();