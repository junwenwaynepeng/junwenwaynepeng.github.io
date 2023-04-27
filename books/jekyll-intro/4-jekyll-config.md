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

關鍵字與網站敘述的描述會出現在網站的 html 標頭檔內，並不會顯示在網頁的內容部分。網路上有很多免費的資訊[^1]告訴你如何優化網站的 SEO ，可以多多參考，並嘗試設定。另外你也可以請 ChatGPT 告訴你該如何做，我相信效果不會太差。如果你想深入了解標頭檔的 `meta` 設定，我們將在後續章節深入講解

# 導航欄中的連結列表

![Navbar](/img/4-jekyll-config/3.jpg)

我們用下面的文字檔來實現上方的導航欄結構

```yaml
#########################################
# --- 導航欄（網頁右上角）中的連結列表 --- #
#########################################

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
 ├─ README.md
 ├─ _config.yml
 ├─ aboutme.md
 ├─ all-slides.html
 ├─	publication
 ├─   ...    
 ├─ books
 │   │ 
 │   └─ jekyll-intro
 │       ├─ 0-intro.md
 │       ├─ 1-git_and_github.md
 │       ├─ ...
 │   
 ├─ folder
 │   ├─ file1.txt
 │   ├─ file2.txt
 │   ├─ ...
```

相信讀者可以透過比較生成的結果、文檔設定與目錄結構理解如何調整自己的目錄結構與導航欄結構。以下我們快速地整理重點：

* 副檔名不重要 `.html` 與 `.md` 皆可以省略
* `:` 如果是放檔案的"絕對路徑"，那導航欄就會產生一個連結到那個檔案，如果是網址，就會產生連結到外部網站
* 不可以在 `:` 後同時放置"連結位址"與"子導航欄"

# Logo and Favicon

![avatar](/img/4-jekyll-config/5.jpg)

```yaml
############################
# --- Logo and Favicon --- #
############################

# 顯示在導航欄中的圖片 - 最好使用正方形圖片
# 如果您不想在導航欄中顯示圖片，請刪除此參數
avatar: "/assets/img/DatArt.png"

# 默認情況下，圖像會被切成圓形。您可以通過設置“round-avatar：false”來禁用此行為。
round-avatar: true

# 如果您想要在左上角擁有圖像標誌，而不是使用網站標題，
# 取消註釋（#）並指定以下參數
#title-img: /path/to/image

# Favicon 是網站的小圖示，出現在瀏覽器的標籤頁上
favicon: "/assets/img/favicon.png"
```

# 社交媒體鏈接

![Social Network](/img/4-jekyll-config/4.jpg)

![Share Social Links](/img/4-jekyll-config/6.jpg)
```

######################
# --- 社交媒體鏈接 --- #
######################

# 選擇您想在頁腳中顯示的社交網絡鏈接。
# 取消對您想要顯示的鏈接的註釋（#），並將您的信息添加到每個鏈接中。
social-network-links:
  email: "junwen.wayne.peng@gmail.com"
  rss: true  # remove this line if you don't want to show an RSS link at the bottom
#  facebook: deanattali
  github: junwenwaynepeng
#  twitter: daattali
#  patreon: DeanAttali
#  youtube: c/daattali
#  medium: yourname
#  reddit: yourname
#  linkedin: daattali
#  xing: yourname
#  stackoverflow: "3943160/daattali"
#  snapchat: deanat78
  instagram: peng1736
#  spotify: yourname
#  telephone: +14159998888
#  steam: deanat78
#  twitch: yourname
#  yelp: yourname
#  telegram: yourname
  calendly: junwen-wayne-peng               # 相當好用的預約網站，預設串接 google calendar，且支援多人預約
#  mastodon: instance.url/@username
  ORCID: 0000-0001-5769-9519                # 學者 ID
  google-scholar: junwen.wayne.peng@gmail.com
#  discord: invite/invite_code or users/userid 
#  kaggle: yourname
#  hackerrank: yourname
  line: 2gzInYq

# 如果您希望您的網站生成RSS訂閱，請提供一個描述
# 訂閱鏈接的URL將為https://<您的網站>/feed.xml
rss-description: 歡迎來到 Junwen Wayne Peng 的個人網站！我是台大理論中心 NCTS 數學組的研究員，此網站將分享我的上課資訊和網頁與程式 DIY 技巧，以及我的研究成果。我的研究專長為算數動態系統與數論演算法。

# 選擇要在文章中顯示的社交網絡分享鏈接
share-links-active:
  twitter: true
  facebook: true
  line: true
  linkedin: true
```


[^1]: [SEO check](https://www.seobility.net/en/seocheck/)