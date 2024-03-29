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

這個章節我們將來詳細介紹如何對這個部落格做客製化的參數設定，配置文件是部落格根目錄裡的 `_config.yml` ，他 使用一種叫做 YAML 的語言進行編輯，以下我們將先介紹 YAML 是什麼，編輯的格式，再介紹 `_config.yml` 裡面的配置細節。

# YAML 簡介

## 什麼是 YAML

YAML 是一種常見的資料序列化格式，其名稱是「YAML Ain't Markup Language」的縮略語。它的設計旨在使資料易於閱讀和撰寫，並且可以被用於許多不同的程式語言中，包括 Python、Ruby、Java、JavaScript 等等。在 YAML 中，資料以層次結構的形式表示，並使用*縮排*表示層次關係。這使得 YAML 檔案相對容易閱讀。以下我們只對必要的概念做介紹，如果你有更細節的需求，可以參考這個網站[^yaml]。

## YAML 的基本元素

### 縮排 (Indentation)

YAML 使用縮排（Indentation）來表示數據結構，而不是使用括號或者其他符號。縮排時只能使用**空格**。通常，一個縮排等於**兩個空格**，一個資料層級使用幾個縮排端看使用者的習慣，只要固定即可。現在很多語言都是使用縮排來幫助區分不同的數據層級和結構，使得程式或文檔更加易讀且易於維護。

```yaml
# 第一層資料
lv1-data-1: data-1
lv1-data-2: data-2
lv1-list: 
  # 第二層資料
  - lv2-data-1
  - lv2-data-2
  - lv2-list:
    # 第三層資料
    - a
    - b
  # 回到第二層資料
  - lv2-data-3
# 回到第一層資料
lv-1-data-3: data-3
```

### 註釋（Comments）

註釋可以在 YAML 文件中用來提供對資料的說明或說明 YAML 文件的結構。在 YAML 中，註釋以井號（#）開始，直到該行的結束。井號之後的所有內容都會被當作註釋並被忽略。

以下是一個包含註釋的 YAML 文件的例子：

```yaml
########################################
#   __     __        __  __  _         #
#   \ \   / / /\    |  \/  || |        #
#    \ \_/ / /  \   | \  / || |        #
#     \   / / /\ \  | |\/| || |        #
#      | | / ____ \ | |  | || |____    #
#      |_|/_/    \_\|_|  |_||______|   #
########################################

# 這是一個 YAML 文本
name: John # 備註 1
age: 30   # 備註 2
```

### 純量（Scalar）：表示單一值，可以是數字、布林值、字串、日期、時間、空值等。 **冒號後（`:`）必須要有一個空格**

```yaml
# 數字
age: 30
# 布林值 
married: true
# 字串 (後面有更多關於字串的詳細解釋)
name: John
# 日期: YYYY-MM-DD
birthdate: 1990-01-01
# 時間：YYYY-MM-DDThh:mm:ss+時區
time: 2018-02-17T15:02:31+08:00
# Null
remark: ~
```

### 數組（Sequence）：表示有序集合，

  - 使用破折號（-）表示。 **`-`前必須有縮排，後必須有一個空格**
```yaml
fruits:
  - apple
  - banana
  - orange
```

  - 使用使用行內列表（ Inline List ）
```yaml
fruits: [apple, banana, orange]
```

### 映射（Mapping）：表示鍵值對的集合，使用冒號（:）表示。
```yaml
person:
  name: John
  age: 30
  married: true
```

### 複合結構：數組與映射結合

結合數組與映射，我們可以產生具有結構的資料

```yaml
students:
    -
      name: 张三
      age: 12
      hobby:
          - 打篮球
          - 跑步
    -
      name: 李四
      age: 17
      hobby:
          - 打羽毛球
          - 看书
``` 
## 字串控制

在 YAML 中，字串需要使用引號來包裹，以明確地指定字串的範圍。不同類型的字串需要使用不同類型的引號。

以下是 YAML 中不同類型的字串及其引號使用方式：

* 純量字串：不需要使用引號，可以是任何不包含空格或特殊字符的字串。

```yaml
name: John
```

* 單引號字串：使用單引號（'）包裹的字串，內部的特殊字符不會被解析。

```yaml
message: 'Hello,\nWorld!'
```

* 雙引號字串：使用雙引號（"）包裹的字串，內部的特殊字符會被解析。

```yaml
message: "Hello,\nWorld!"
```

在使用雙引號字串時，可以使用反斜杠（\）來表示特殊字符，例如 `\n` 表示換行符號。以下我們列出 YAML 的特殊字符。

* 塊狀純值：使用分隔線（`|`）可以讓下方縮排部分的內容依照其排版輸出。

```yaml
message: |
  YAML 
    (YAML Ain't Markup Language)
  is a data-serialization language
```

# Jekyll 配置檔

請你先打開 `_config.yml` 這是一個Jekyll網站的配置文件範例，通過更改該文件，你可以設置以下內容：

1. 網站標題和作者名字
2. 網站 SEO 與 Google Analytics 追蹤網站流量
3. 導航欄中的連結列表
4. 網站標誌和社交媒體鏈接，可用於在網站中添加個人品牌，以及在文章中顯示社交媒體分享鏈接的選項
5. 文章的留言系統，與添加我設計的額外套件。

這些設置可以根據您的需要進行編輯，初次設置完成後，通常您不需要再次編輯此文件。

## 網站標題與作者

---
![Title](/img/4-jekyll-config/1.jpg)

---
![Author](/img/4-jekyll-config/2.jpg)

---
```yaml
###################
# --- 必要選項 --- #
##################

# 網站名
title: Wayne Peng's 

# 你的名子，將會出現在頁角區域（網頁最下方）
author: Junwen Wayne Peng
```

## SEO 與搜索關鍵字

```yaml
##############
# --- SEO ---#
##############

# 關鍵詞與您的網站相關聯，以便於搜索引擎優化（SEO）的目的
keywords: "Junwen, Wayne, Peng, Junwen Peng, Wayne Peng, Junwen Wayne Peng, 數學網站,台大,理論中心,NCTS,數學,math,calculus,微積分,微分,積分,如何架設網站,Jekyll,arithmetic,dynamics,galois group"
```

關鍵字與網站敘述的描述會出現在網站的 html 標頭檔內，並不會顯示在網頁的內容部分。網路上有很多免費的資訊[^seo]告訴你如何優化網站的 SEO ，可以多多參考，並嘗試設定。另外你也可以請 ChatGPT 告訴你該如何做，我相信效果不會太差。如果你想深入了解標頭檔的 `meta` 設定，我們將在後續章節深入講解

## 導航欄中的連結列表

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

# 允許子菜單項目（第二層導航菜單項目）比頂級菜單項目更長
# 如果此設置關閉，則長子菜單單詞可能會被截斷
# 請參閱 https://github.com/daattali/beautiful-jekyll/issues/765 以了解此設置可以解決的問題
navbar-var-length: true
```

對照我們的目錄結構

```
githubAccount.github.io
 ├─ README.md
 ├─ _config.yml
 ├─ aboutme.md
 ├─ all-slides.html
 ├─ publication
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

## Logo and Favicon

![avatar](/img/4-jekyll-config/5.jpg)

---
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

## 社交媒體鏈接

![Social Network](/img/4-jekyll-config/4.jpg)

---
![Share Social Links](/img/4-jekyll-config/6.jpg)

---
```yaml
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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
## 一般選項

![general options](/img/4-jekyll-config/7.jpg)

---
=======
=======
>>>>>>> Stashed changes
# 一般選項

![general options](/img/4-jekyll-config/7.jpg)

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
```yaml
###################
# --- 一般選項 --- #
###################

# 如何在頁腳中顯示您的網站鏈接
# 如果您不想在頁腳中顯示鏈接，請刪除此內容或註解（#）
url-pretty: "junwenwaynepeng.github.io"

# 摘要詞長 - 將每篇文章的摘要在訂閱頁面上截斷為指定數量的詞
excerpt_length: 50

<<<<<<< Updated upstream
<<<<<<< Updated upstream
# 是否在訂閱頁面中為每篇部落格文章顯示摘要
=======
# 是否在訂閱頁面中為每篇文章顯示摘要
>>>>>>> Stashed changes
=======
# 是否在訂閱頁面中為每篇文章顯示摘要
>>>>>>> Stashed changes
feed_show_excerpt: true

# 是否在訂閱頁面中在每篇文章預覽下方顯示標籤列表
feed_show_tags: true

# 在頁腳中添加一個按鈕，用於編輯當前頁面。僅當您的網站托管在GitHub上時才有效。
#edit_page_button: true

# 是否在訂閱頁面中為每篇文章顯示所需閱讀時間
show_readtime: true

```

`url-pretty` 是在頁角顯示的連結，其實沒什麼用。

# 網站顏色與背景

```yaml
#######################
# --- 顏色/背景圖像 --- #
#######################

# 個性化您網站中的顏色。顏色值可以是任何有效的CSS顏色。

navbar-col: "#EAEAEA"
navbar-text-col: "#404040"
navbar-border-col: "#DDDDDD"
page-col: "#FFFFFF"
text-col: "#404040"
link-col: "#008AFF"
hover-col: "#0085A1"
footer-col: "#EAEAEA"
footer-text-col: "#777777"
footer-link-col: "#404040"
footer-hover-col: "#0085A1"

# 或者，可以將導航欄、頁腳和頁面背景設置為圖像。
# 而不是顏色。

#navbar-img: "/assets/img/bgimage.png"
#footer-img: "/assets/img/bgimage.png"
#page-img: "/assets/img/bgimage.png"

# 建議為移動瀏覽器設置顏色作為瀏覽器主題。這僅受到少數移動瀏覽器的支持。
#mobile-theme-col: "#0085A1"

# 為了進行額外的視覺定制，您可以在您網站的每個頁面中包含額外的CSS文件。在這裡列出任何自定義的CSS文件。
#site-css:
#  - "/assets/css/custom-styles.css"

# 如果您有應該在每個頁面中包含的常見JavaScript文件，請在此處列出它們
#site-js:
#  - "/assets/js/custom-script.js"
```

# 網頁

```yaml
###################
# --- 網頁分析 --- #
##################

# 填寫您的 Google Analytics gtag.js ID，以使用 gtag 跟踪您的網站，(https://analytics.google.com/)。
gtag: "G-EL818RR92S"

# 填寫您的 Cloudflare Analytics beacon token，以使用 Cloudflare Analytics 跟踪您的網站。
#cloudflare_analytics: ""

# Google Tag Manager ID
#gtm: ""

# Matomo (aka Piwik) Web statistics
# 取消註解以下部分以啟用 Matomo。 opt-out 參數控制是否允許用戶選擇退出跟踪。
#matomo:
#  site_id: "9"
#  uri: "demo.wiki.pro"
#  opt-out: true
<<<<<<< Updated upstream
```

## 顏色/背景圖像

```yaml
########################
# --- 顏色/背景圖像 --- #
########################

# 個性化您網站中的顏色。顏色值可以是任何有效的CSS顏色。

navbar-col: "#EAEAEA"
navbar-text-col: "#404040"
navbar-border-col: "#DDDDDD"
page-col: "#FFFFFF"
text-col: "#404040"
link-col: "#008AFF"
hover-col: "#0085A1"
footer-col: "#EAEAEA"
footer-text-col: "#777777"
footer-link-col: "#404040"
footer-hover-col: "#0085A1"

# 或者，可以將導航欄、頁腳和頁面背景設置為圖像。
# 而不是顏色。

#navbar-img: "/assets/img/bgimage.png"
#footer-img: "/assets/img/bgimage.png"
#page-img: "/assets/img/bgimage.png"

# 建議為移動瀏覽器設置顏色作為瀏覽器主題。這僅受到少數移動瀏覽器的支持。
#mobile-theme-col: "#0085A1"

# 為了進行額外的視覺定制，您可以在您網站的每個頁面中包含額外的CSS文件。在這裡列出任何自定義的CSS文件。
#site-css:
#  - "/assets/css/custom-styles.css"

# 如果您有應該在每個頁面中包含的常見JavaScript文件，請在此處列出它們
#site-js:
#  - "/assets/js/custom-script.js"
```

`site-css` 與 `site-js` 為進階用法，可以暫時不予理會。

## 網頁分析

提供四種網路解析方式：
  * [Google Analytics]((https://analytics.google.com/analytics/web/provision/#/provision))：如果不是太在意網路流量，但是好奇有多人少人會來觀看網站（例如我），那 Google Analytics 就相當好用了。 
  * [CloudFlare Analytics](https://www.cloudflare.com/zh-tw/)： 提供專門為網站安全服務的服務供應商
  * [Google Tag Manager](https://tagmanager.google.com/#/home)：如果你在乎瀏覽者的特地行為，例如是否有檢視某張照片，或者是否有使用某個功能，你可以使用 Google Tag Manager 去做這些更細部的追蹤，這個[網站](https://transbiz.com.tw/google-tag-manager-gtm-%e6%95%99%e5%ad%b8)提供了不錯的簡介。
  * [Matomo](https://matomo.org/)：這是一個開源的網頁應用服務，提供比 Google Analytics 更強大的分析功能 。

```yaml
###################
# --- 網頁分析 --- #
###################

# 填寫您的 Google Analytics gtag.js ID，以使用 gtag 跟踪您的網站，(https://analytics.google.com/)。
gtag: "G-EL818RR92S"

# 填寫您的 Cloudflare Analytics beacon token，以使用 Cloudflare Analytics 跟踪您的網站。
#cloudflare_analytics: ""

# Google Tag Manager ID
#gtm: ""

# Matomo (aka Piwik) Web statistics
# 取消註解以下部分以啟用 Matomo。 opt-out 參數控制是否允許用戶選擇退出跟踪。
#matomo:
#  site_id: "9"
#  uri: "demo.wiki.pro"
#  opt-out: true
```

## 文章回覆

我們提供六種留言系統：
  * [Disqus](https://disqus.com/)：應該是最為強大的留言系統，因為它允許使用各家社群媒體帳號進行留言。
  * [Facebook Comments](https://developers.facebook.com/docs/plugins/comments/)：只為 Facebook 帳戶提供的留言系統。
  * [CommentBox](https://commentbox.io/)：沒有廣告，不追蹤用戶信息，簡單的留言系統。
  * [Utterances](https://www.jkg.tw/p3350/)：內建於 Github 的瀏覽系統，留言訊息也會同時儲存到你的 Github Repository 內。
  * [Staticman](https://staticman.net/)：專門為 Jekyll + Github Page 設計的留言系統，但是 Utterances 似乎比較強大。
  * [giscus](https://giscus.app/zh-TW)：giscus 是 Utterances 的分支，我相信它跟 Uterances 沒有太多的區別。優點是，它的官方網站還活著。

```yaml
###################
# --- 文章回覆 --- #
##################

# To use Disqus comments, sign up to https://disqus.com and fill in your Disqus shortname (NOT the userid)
#disqus: ""

# To use Facebook Comments, create a Facebook app and fill in the Facebook App ID
#fb_comment_id: ""

# To use CommentBox, sign up for a Project ID on https://commentbox.io
#commentbox: "" # Project ID, e.g. "5694267682979840-proj"

# To use Utterances comments: (0) uncomment the following section, (1) fill in
# "repository" (make sure the repository is public), (2) Enable Issues in your repository,
# (3) Install the Utterances app in your repository https://github.com/apps/utterances
# See more details about the parameters below at https://utteranc.es/
#utterances:
#  repository: # GitHub username/repository eg. "daattali/beautiful-jekyll"
#  issue-term: title   # Mapping between blog posts and GitHub issues
#  theme: github-light # Utterances theme
#  label: blog-comments # Label that will be assigned to GitHub Issues created by Utterances

# To use Staticman comments, uncomment the following section. You may leave the reCaptcha
# section commented if you aren't using reCaptcha for spam protection. 
# Using Staticman requires advanced knowledge, please consult 
# https://github.com/eduardoboucas/staticman/ and https://staticman.net/ for further 
# instructions. For any support with staticman please direct questions to staticman and 
# not to BeautifulJekyll.
#staticman:
#  repository : # GitHub username/repository eg. "daattali/beautiful-jekyll"
#  branch     : master # If you're not using `master` branch, then you also need to update the `branch` parameter in `staticman.yml`
#  endpoint   : # URL of your deployment, with a trailing slash eg. "https://<your-api>/v3/entry/github/"
#  reCaptcha:   # (optional, set these parameters in `staticman.yml` as well) 
#    siteKey  : # You need to apply for a site key on Google
#    secret   : # Encrypt your password by going to https://<your-own-api>/v3/encrypt/<your-site-secret>

# To use giscus comments:
# (0) Uncomment the following giscus section, (1) Enable Discussions in your GitHub repository, 
# (2) Install the giscus app in your repository (details at https://giscus.app),
# (3) Fill in *all* the parameters below 
# See more details about giscus and each of the following parameters at https://giscus.app
#giscus:
#  hostname: giscus.app # Replace with your giscus instance's hostname if self-hosting
#  repository: # GitHub username/repository eg. "daattali/beautiful-jekyll"
#  repository-id: # ID of your repository, retrieve this info from https://giscus.app
#  category: Announcements # Category name of your GitHub Discussion posts
#  category-id: # ID of your category, retrieve this info from https://giscus.app
#  mapping: pathname
#  reactions-enabled: 1
#  emit-metadata: 0
#  theme: light
```

## 雜項

以下內容你無須做任何變動。唯一可能會想要改動的是`paginate`這項參數，它控制首頁會顯示幾篇文章。

```yaml
################
# --- 雜項 --- #
###############

# Ruby引擎生成部落格的日期格式 (你可以參考此網站根據你喜歡的格式換掉參數)
timezone: "Asia/Taipei"    # 設定時區
date_format: "%B %d, %Y" # 目前格式 March 27, 2023

# Facebook App ID
#fb_app_id: ""
# --- 你無須更動下方所有參數，但是也可以根據你的需求做調整 --- 


# Markdown 引擎選擇:
# Output options (more information on Jekyll's site)
# markdown: kramdown    # kramdown是jekyll原生的markdown引擎，但因為github選擇使用CommonMark，所以我們優先採用CommonMarkGhPages，如果你想要換回 kramdown僅須將markdown參數換成kramdown
markdown: CommonMarkGhPages
highlighter: rouge
permalink: /:year-:month-:day-:title/    # permalink是用來設定網址是如何顯示的，不需要更動
paginate: 5    # 部落格每頁顯現多少文章
#kramdown:
#  syntax_highlighter: rouge
#  input: GFM
#  auto_ids:       true
#  toc_levels:     1..3

#kramdown:
#  input: GFM
commonmark:
  options: ["UNSAFE", "SMART", "FOOTNOTES"]
  extensions: ["strikethrough", "autolink", "table", "tagfilter"]


# Default YAML values (more information on Jekyll's site)
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      comments: true  # add comments to all blog posts
      social-share: true # add social media sharing buttons to all blog posts
  -
    scope:
      path: "" # any file that's not a post will be a "page" layout by default
    values:
      layout: "page"

# Exclude these files from production site
exclude:
  - CHANGELOG.md
  - CNAME
  - Gemfile
  - Gemfile.lock
  - LICENSE
  - README.md
  - screenshot.png
  - docs/

plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-seo-tag
```

## 額外套件管理

這部分也無需做任何更改，如果你希望關掉某些套件的功能，那可以將他們註解掉。我們會在後續的章節簡介我設計了那些額外套件。

```yaml
########################
# ---  額外套件管理 --- #
########################
head-package:
  -
    module: "mathjax"
    file: "package/mathjax.html"
    src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
foot-package:
  -
    module: "mermaid"
    file: "package/mermaid.html"
    src: "https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs"
    
reveal:
  title: "Reveal-jekyll"
  transition: "slide" # none/fade/slide/convex/concave/zoom
  theme: "black" # beige/blood/league/moon/night/serif/simple/sky/solarized/white
  number: true
  numberType: "c" # "h.v" / "h/v" / "c/t"

# Slides
collections:
  slides:
    output: true
    permalink: /:collection/:name
=======
>>>>>>> Stashed changes
```

[^yaml]: [YAML Introduction](https://tutorialreference.com/yaml/yaml-tutorial)
[^seo]: [SEO check](https://www.seobility.net/en/seocheck/)