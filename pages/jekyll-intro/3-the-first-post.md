---
layout: page
title: 教學網站建立教學
subtitle: 用 Markdown 新增你的第一篇文章
right-toc: true
left-toc: true
book: jekyll-intro
preview_page: 2-choice-of-ide
next_page: 4-jekyll-config
---

在 Jekyll po文的方法其實相當簡單，你只需要到 `_post` 這個資料夾裡面，依照一個固定格式命名 markdown 文件，再通過 `git push` 就可以新增文章到你的網頁上了。詳細的步驟如下：

# 步驟

1. 首先，使用你的編輯器打開你在此[步驟](1-git-and-github)得到的資料夾。
2. 在這個資料夾裡面找到 `_post` 這個子資料夾
3. 在這個資料夾新增一個文件，並依據 `year-month-day-title.md` 的規則命名，以"-"分隔各單詞。例如："2023-04-04-hello-world.md"。如果你使用的時間是在未來，那 Github Page 不會把他推播出去。*注意！ Github 也不會在那個時間點到的時候把文章推送出去，除非你要求 Github 在當天再編譯一次。*
4. 在檔案內容欄位，輸入你的貼文內容，使用Markdown語法來編寫內容。
```markdown
---
layout: post
title: 你的標題
date: 2022-04-01
categories: [分類1, 分類2]
tags: [標籤1, 標籤2]
---

＃ Hellow World

Good to see you, bro/sis :)!
```
  * 這個文件分成兩半部份，上半部份是對這個貼文的一些參數設定，是用 yaml 的檔案格式寫成，我們之後會詳細介紹有哪些參數可以用。
  * 下半部份是用 Markdown 的語法寫成的。

5. 你現在可以用在[上一個章節](2-choice-of-ide)這個章節學到的方法將文章上傳到 Github，稍微等個一分鐘後，重整你的網站，你就會看到你的部落格更新了。

從這裡開始，如果你不打算在現在對你的網站做任何客製化的工作的話，你就可以開始學習如何使用 Markdown 來新增你的內容，相信我，Markdown很容易學。