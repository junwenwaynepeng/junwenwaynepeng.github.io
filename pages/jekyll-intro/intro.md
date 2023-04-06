---
layout: page
title: 教學網站建立教學
subtitle: 我們將用Github page建立簡單的教學網站，讓你也可以擁有自己的題庫。
right-toc: true
left-toc: true
book: jekyll-intro
---

# 概述

透過Github架設網站，可以讓您輕鬆地建立一個靜態網站，並且免費地將其部署到網路上。在此過程中，我們需要具備以下三個基本能力：

1. 使用git與github，這可以讓我們方便地進行版本控制和部署。
2. 使用markdown進行網頁內容編寫，這是一種輕量級的編寫方式，能夠快速地製作出美觀的網頁內容。
3. 了解各種資料除存格式，如YAML、CSV、TSV、與JSON等。
3. 進階的技能需要能夠熟悉liquid、html、css和js等網站開發相關技術，以便更加靈活地掌控網站的設計和功能。

本教學將快速帶您了解如何在Github上建立自己的網站。我會分享我在架設此網站時所使用的資源，並且提供簡單易懂的步驟，讓您可以在短短三步驟內完成。首先，我們會帶您設定好電腦與Github的連線，並且介紹兩種常用的編輯器Sublime或VScode作為您的網站更新的圖形界面。接著，我們會介紹如何用編輯器與Markdown來撰寫你的第一篇文章，緊接著我們會概覽網站的細節設定，包括功能與外觀，讓您可以自己進行調整。此外，我們還會介紹資料儲存格式，例如yaml、csv、cst和json等，並且告訴您如何透過這些格式儲存資料並發布作業給學生。最後，如果您需要進行更細部的調整，我會提供所有可以學習的資源，或者您也可以直接與我討論。

接下來你可以繼續閱讀本篇文章，下面的各部分將會概述在每個步驟中所需要進行的工作，讓你更了解整個架設過程中的流程。如果你想要立即開始，可以點擊此[連結](git_and_github)進入到第一個步驟。

# [Git與Github](git_and_github)

這個章節會教你如何使用Git與Github來管理你的網站原始碼。Git是一個版本控制工具，可以讓你保存不同版本的網站原始碼，方便你在需要時回溯到之前的版本，但如果你於須與其他人協作，那你可以把Git當作一個跟雲端同步的工具。Github是一個基於Git的網路代管服務，可以讓你在上面建立你的網站儲存庫，方便你和其他人協作，但在這邊我們僅僅只是用他來當作發布我們網站的伺服器。在本節中，你會學習到如何安裝Git、創建Github帳戶、創建新儲存庫以及如何使用Git命令在本地端和Github之間同步網站原始碼。

# 編輯器選擇

這個章節將會教你如何選擇一個適合你的編輯器來編輯你的網站原始碼。編輯器是一個軟體工具，讓你可以編寫和編輯程式碼。在本節中，我們會介紹兩種常用的編輯器：Sublime和VScode，並會說明他們的特點和優缺點。我們也會提供一些編輯器的基本設定和插件推薦，讓你可以更有效率地編輯你的網站原始碼。

# 用Markdown新增你的第一篇文章

圖形界面的網頁編輯器也許非常直覺，但是對於一個專住在內容的網站上，過多的編輯只是會增加閱讀的困難而已，如果只是輕量化的編輯，Markdown完全可以勝任這個工作。這個章節將會教你如何使用Markdown撰寫你的第一篇文章。Markdown是一個輕量級標記語言，可以讓你簡單地撰寫格式良好的文章。在本節中，我們會介紹Markdown的基本語法，包括標題、段落、鏈接、圖片、列表等。

# Jekyll網站參數調整

Jekyll是一個靜態網站生成器，可以讓你把你的Markdown文件轉換為HTML、CSS和JavaScript文件。在本節中，我們會介紹如何安裝和設定Jekyll，以及如何使用Jekyll的一些高級功能，如佈局、主題和插件等。我們也會介紹如何自定義你的網站配置和外觀。

# 資料除存格式

在網站開發中，資料儲存是非常重要的一部分，不同的資料儲存格式也有不同的用途和特點。在本節中，我們將介紹常用的yaml、csv、tsv、與json等資料儲存格式，以及如何在網站開發中使用它們，讓你的網站擁有更多的資料來源和應用。我們將用題庫來示範怎麼儲存資料與在你的網頁上使用資料。

# 進階技巧

進階技巧是建立一個更加複雜和專業的網站所必須的知識和技能，對於那些想要更深入研究網站架設的人來說是非常有價值的。這些技巧包括了使用Liquid模板語言來自定義你的網站外觀和功能，以及了解HTML、CSS和JavaScript的更多細節，以及如何在網站中使用它們。