---
layout: page
title: 教學網站建立教學
subtitle: Jekyll 網站參數調整
right-toc: true
left-toc: true
book: jekyll-intro
preview_page: 3-the-first-post
next_page: 4-jekyll-config
---

這個章節我們將來詳細介紹如何對這個部落格做客製化的參數設定，請你先打開 `_config.yml` 這是一個Jekyll網站的配置文件範例，通過更改該文件，你可以設置以下內容：

1. 網站標題和作者名字
2. 網站 SEO 與 Google Analytics 追蹤網站流量
3. 導航欄中的連結列表
4. 網站標誌和社交媒體鏈接，可用於在網站中添加個人品牌，以及在文章中顯示社交媒體分享鏈接的選項
5. 文章的留言系統，與添加額外套件。

這些設置可以根據您的需要進行編輯，初次設置完成後，通常您不需要再次編輯此文件。 以下我們將詳細的介紹這些設置。

# 網站標題與作者
```yaml
###################
# --- 必要選項 --- #
##################

# 網站名
title: Wayne Peng's 

# 你的名子，將會出現在頁角區域（網頁最下方）
author: Junwen Wayne Peng
```
---
![Title](/img/4-jekyll-config/1.jpg)

---
![Author](/img/4-jekyll-config/2.jpg)

---

# SEO 與搜索關鍵字

```yaml
##############
# --- SEO ---#
##############

# 關鍵詞與您的網站相關聯，以便於搜索引擎優化（SEO）的目的
keywords: "數學網站,台大,理論中心,NCTS,數學,math,calculus,微積分,微分,積分,如何架設網站,Jekyll,arithmetic,dynamics,galois group"
```

關鍵字與網站敘述的描述會出現在網站的 html 標頭檔內，並不會顯示在網頁的內容部分。網路上有很多免費的資訊[^1]告訴你如何優化網站的 SEO ，可以多多參考，並嘗試設定。另外你也可以請 ChatGPT 告訴你該如何做，我相信效果不會太差。

# 導航欄中的連結列表

![Navbar](/img/4-jekyll-config/3.jpg)

我們用下面的文字檔來實現上方的導航欄結構

```yaml
navbar-links:
  About Me: "aboutme"
  Resources:
    - ChatGPT: "https://chat.openai.com/chat"
    - Beautiful Jekyll: "https://beautifuljekyll.com"
    - Learn markdown: "https://www.markdowntutorial.com/"
    - Build yourown blog: "books/jekyll-intro/0-intro"
  Slides: "all-slides"
  Publication: "publication"

# 在導航欄中添加搜索按鈕
post_search: true

# Allow sub-menu items (second-level navigation menu items) to be longer than the top-level menu
# If this setting is off, then long sub-menu words might get cut off
# See https://github.com/daattali/beautiful-jekyll/issues/765 to understand the issue this setting can solve
navbar-var-length: true
```

對照我們的目錄結構

```
githubAccount.github.io
│   README.md
│   _config.yml
│   aboutme.md
│   all-slides.html
│	publication
│   ...    
│
└───books
│   │ 
│   └───jekyll-intro
│       │   0-intro.md
│       │   1-git_and_github.md
│       │   ...
│   
└───folder2
    │   file021.txt
    │   file022.txt
```

相信讀者可以自行判斷並且設計自己的目錄結構與導航欄結構。以下我們快速地整理重點：

* 副檔名不重要 `.html` 與 `.md` 皆可以省略
* `:` 如果是放檔案的"絕對路徑"，那導航欄就會產生一個連結到那個檔案，如果是網址，就會產生連結到外部網站
* 不可以在 `:` 後同時放置"連結位址"與"子導航欄"

# Logo

```yaml
################
# --- Logo --- #
################

# 顯示在導航欄中的圖片 - 最好使用正方形圖片
# 如果您不想在導航欄中顯示圖片，請刪除此參數
avatar: "/assets/img/DatArt.png"

# 默認情況下，圖像會被切成圓形。您可以通過設置“round-avatar：false”來禁用此行為。
round-avatar: true

# 如果您想要在左上角擁有圖像標誌，而不是使用網站標題，
# 取消註釋（#）並指定以下參數
#title-img: /path/to/image
```

![Social Network](/img/4-jekyll-config/4.jpg)


[^1]: [SEO check](https://www.seobility.net/en/seocheck/)