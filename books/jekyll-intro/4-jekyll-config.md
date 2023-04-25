---
layout: page
title: 教學網站建立教學
subtitle: 用 Markdown 新增你的第一篇文章
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
description: "Junwen Wayne Peng的個人網站，我目前任職於 台大理論中心 NCTS 數學組，我會用這個網站來分享我的上課資訊，以及整理一些網頁與程式DIY的技巧。你也可以在這個網頁找到我的研究結果。我的研究重點是算數動態系統 Arithmetic dynamic 與 數論裡面的演算法。"
```

關鍵字與網站敘述的描述會出現在網站的 html 標頭檔內，並不會顯示在網頁的內容部分。網路上有很多免費開源的資訊告訴你如何優化網站的 SEO 可以多多參考並設定你自己嘗試。



![Navbar](/img/4-jekyll-config/3.jpg)
![Social Network](/img/4-jekyll-config/4.jpg)
