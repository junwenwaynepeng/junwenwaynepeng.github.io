---
layout: page
title: 教學網站建立教學
subtitle: 我們將用Github page建立簡單的教學網站，讓你也可以擁有自己的題庫。
right-toc: true
left-toc: true
book: jekyll-intro
next_page: 1-git-and-github
---

# 概述

透過Github架設網站，可以讓你輕鬆地建立一個靜態網站，並且免費地將其部署到網路上。在此過程中，我們需要具備以下三個基本能力：

1. 使用 git 與 github ，這可以讓我們方便地進行版本控制和部署。
2. 使用 markdown 進行網頁內容編寫，這是一種輕量級的編寫方式，能夠快速地製作出美觀的網頁內容。
3. 了解各種資料除存格式，如 YAML 、 CSV 、 TSV 、與 JSON 等。
3. 進階的技能需要能夠熟悉 liquid 、 html 、 css 和 js 等網站開發相關技術，以便更加靈活地掌控網站的設計和功能。

本教學將快速帶你了解如何在 Github 上建立自己的網站。我會分享我在架設此網站時所使用的資源，並且提供簡單易懂的步驟，讓你可以在短短三步驟內完成。首先，我們會帶你設定好電腦與 Github 的連線，並且介紹兩種常用的編輯器 Sublime 或 VScode 作為你的網站更新的圖形界面。接著，我們會介紹如何用編輯器與 Markdown 來撰寫你的第一篇文章，緊接著我們會概覽網站的細節設定，包括功能與外觀，讓你可以自己進行調整。此外，我們還會介紹資料儲存格式，例如 yaml 、 csv 、 cst 和 json 等，並且告訴你如何透過這些格式儲存資料並發布作業給學生。最後，如果你需要進行更細部的調整，我會提供所有可以學習的資源，或者你也可以直接與我討論。

接下來你可以繼續閱讀本篇文章，下面的各部分將會概述在每個步驟中所需要進行的工作，讓你更了解整個架設過程中的流程。如果你想要立即開始，可以點擊此[連結](1-git-and-github)進入到第一個步驟。

# [Git 與 Github](1-git-and-github)

這個章節會教你如何使用 Git 與 Github 來管理你的網站原始碼。 Git 是一個版本控制工具，可以讓你保存不同版本的網站原始碼，方便你在需要時回溯到之前的版本，但如果你於須與其他人協作，那你可以把 Git 當作一個跟雲端同步的工具。 Github 是一個基於 Git 的網路代管服務，可以讓你在上面建立你的網站儲存庫，方便你和其他人協作，但在這邊我們僅僅只是用他來當作發布我們網站的伺服器。在本節中，你會學習到如何安裝 Git 、創建 Github 帳戶、創建新儲存庫以及如何使用 Git 命令在本地端和 Github 之間同步網站原始碼。

# [編輯器選擇](2-choice-of-ide)

這個章節將會教你如何選擇一個適合你的編輯器來編輯你的網站原始碼。編輯器是一個軟體工具，讓你可以編寫和編輯程式碼。在本節中，我們會介紹兩種常用的編輯器： Sublime 和 VScode ，並會說明他們的特點和優缺點。我們也會提供一些編輯器的基本設定和插件推薦，讓你可以更有效率地編輯你的網站原始碼。

# [用 Markdown 新增你的第一篇文章](3-the-first-post)

圖形界面的網頁編輯器也許非常直覺，但是對於一個專住在內容的網站上，過多的編輯只是會增加閱讀的困難而已，如果只是輕量化的編輯， Markdown 完全可以勝任這個工作。這個章節將會教你如何使用 Markdown 撰寫你的第一篇文章。 Markdown 是一個輕量級標記語言，可以讓你簡單地撰寫格式良好的文章。

# Jekyll 網站參數調整

Jekyll 是一個靜態網站生成器，可以讓你把你的 Markdown 文件轉換為 HTML 、 CSS 和 JavaScript 文件。在本節中，我們會介紹如何安裝和設定 Jekyll ，以及如何使用 Jekyll 的一些高級功能，如佈局、主題和插件等。我們也會介紹如何自定義你的網站配置和外觀。

當你完成到這邊，你基本上已經可以開始設計自己的網頁了，在接下來的內容，我們將特別介紹**如何讓這樣的網頁變成你教學的有用工具**。

# 更多的 Markdown

在本節中，你將學習如何使用 Markdown 的基本語法，從標題、段落、鏈接、圖片、到列表等，完整掌握如何使用這項強大的文本編輯工具。此外，我們還將分享如何為你的 markdown 增加更多的功能，讓你的文本內容更加豐富多樣。不僅如此，我還提供了一些我已經整理好的實用功能，讓你可以直接使用，快速提升你的 markdown 寫作能力。

# 資料儲存格式

在網站開發中，資料儲存是非常重要的一部分，不同的資料儲存格式也有不同的用途和特點。在本節中，我們將介紹常用的 yaml 、 csv 、 tsv 、與 json 等資料儲存格式，以及如何在網站開發中使用它們，讓你的網站擁有更多的資料來源和應用。我們將用題庫來示範怎麼儲存資料與在你的網頁上使用資料。

# 增加一本書

歡迎使用我設計的網站來增加一本書！我已為網站設計了「書」的結構，讓你可以輕鬆地建立一本書。每本書都包含目錄和內容，讓你可以組織你的文章並將它們與世界分享。

除了可以建立自己的書籍，我們的部落格架構也非常適合人們分享彼此的創作。透過這個平台，你可以輕鬆地與其他作者互動、分享和討論彼此的想法和作品。趕快加入我們，開始建立你的書籍或是發掘更多創作的樂趣吧！

# 管理題庫與引用題庫

我設計這個部落格的最初目的是希望有一個好的方法能發布我上課內容的總結與公佈作業題目與答案。也因此我想到如果我能把題目統一蒐集在一個題庫內，並且讓我在用 markdown 寫文章時能快速的引用這些題目，那這個部落格將是一個對老師非常有用的工具。在這個章節，我會仔細的交待我的這些設計細節，並且希望有更多的人能一起來完整這些題庫。

# 進階技巧

進階技巧是建立一個更加複雜和專業的網站所必須的知識和技能，對於那些想要更深入研究網站架設的人來說是非常有價值的。這些技巧包括了使用 Liquid 模板語言來自定義你的網站外觀和功能，以及了解 HTML 、 CSS 和 JavaScript 的更多細節，以及如何在網站中使用它們。很幸運的是，我們剛好活在一個 AI 開始蓬勃發展的時代，我將介紹我是如何使用 AI 來加速我的開發速度的。