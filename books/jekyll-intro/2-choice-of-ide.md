---
layout: page
title: 教學網站建立教學
subtitle: 編輯器選擇
right-toc: true
left-toc: true
book: jekyll-intro
preview_page: 1-git-and-github
next_page: 3-the-first-post
---

# 編輯器選擇

選擇一個適合你的程式編輯器是非常重要的，因為它將直接影響到你的工作效率。在市面上有許多選擇，從簡單的文本編輯器到功能豐富的集成開發環境（IDE）都有。以下是兩種受歡迎的程式編輯器。

Sublime 是一個快速，輕量級的程式編輯器，它支持多種編程語言和插件，使其成為許多開發人員的首選，我也是使用 Sublime 。 Sublime 編輯器提供了許多有用的功能，例如自動完成，語法高亮顯示和代碼片段，使得編程變得更加快速和輕鬆。它還具有一個強大的搜尋功能，可以幫助你快速找到你需要的代碼。Sublime 還有許多可自定義的設置，可以根據個人偏好進行調整，例如配色方案和快捷鍵。

Visual Studio(VS) 是一個功能豐富的集成開發環境（IDE），可以支持多種編程語言。它為開發人員提供了完整的開發工具，包括語法高亮顯示，自動完成，調試和編譯等功能。VS 還提供了一個直觀的用戶界面，可以輕鬆地導航和查看代碼。它還提供了一個豐富的插件庫，可以滿足不同開發人員的需求。這讓 VS 擁有廣大的使用者，也因此我們能更容易在網路上找到 VS 的資源。雖然 VS 擁有很多強大的功能，但其龐大的規模和複雜性也使得它不是所有開發人員的首選。

總的來說，選擇一個適合自己的程式編輯器是非常重要的，可以根據自己的需要和偏好進行選擇。如果你是一個初學者，或只是簡單地需要一個編輯器來編輯文本文件， Sublime 可能是一個不錯的選擇。而如果你需要一個功能豐富的開發環境來開發複雜的應用程序，Visual Studio 可能更適合你的需求。

## Sublime 詳細介紹 

首先請先到 Sublime 官網[下載](https://www.sublimetext.com/download)並安裝，安裝過程中你可能需要選擇安裝位置和一些設定選項，建議選擇預設值即可。接著我想請你先安裝 Sublime Merge ，讓 Sublime 可以用圖形界面去做 `git pull` 與 `git push`

### 安裝 Sublime Merge

Sublime Merge 是一個由 Sublime Text 團隊開發的 Git 圖形化使用者介面 (GUI) 工具，能夠幫助使用者更輕鬆地使用 Git 版本控制系統。以下是 Sublime Merge 的安裝和使用步驟：

1. [下載](https://www.sublimemerge.com/download) Sublime Merge 安裝檔：首先，你需要到 Sublime Merge 的官方網站 (https://www.sublimemerge.com/) 下載適合你作業系統的安裝檔。

2. 安裝 Sublime Merge：下載完成後，點擊安裝檔開始安裝。安裝過程中你可能需要選擇安裝位置和一些設定選項，建議選擇預設值即可。

### 開啟 Sublime 編輯器與使用 Sublime Merge

1. 開啟 Sublime Text 軟體，點選「File」，再點選「Open Folder」，選擇要編輯的檔案所在的資料夾。
![File](/img/choice-of-ide-1.jpg)
![Opne Folder](/img/choice-of-ide-2.png)

2. 開啟檔案後，就可以直接在 Sublime Text 上編輯了。如果需要新增檔案，可以在左側資料夾列表上按右鍵，選擇「New File」。
3. 編輯完成後，可以儲存檔案。點選「File」，再點選「Save」或「Save As」(`ctrl+s`)，選擇要儲存的位置與檔案名稱。
4. 我們先打開 `_post` 資料夾裡面的任一個檔案進行編輯並存檔。
![edit file in post](/img/choice-of-ide-3.jpg)

5. 先確定 Sublime Merge 已經安裝好。
6. 點選 Sublime Text 視窗右下角的 main。開啟 Sublime Merge。
![Sublime Merge](/img/choice-of-ide-4.jpg)
7. 如果要把本地端更改的結果上傳，需要完成下面兩個動作。
	* `git commit` 再次確認所有檔案變更，此步驟須點擊右側 Stage All **兩次**
	![git commit](/img/choice-of-ide-5.jpg)
	* `git push` 上傳同步到雲端，此步驟需要對你的變更做簡單描述，接著點擊「向上的箭頭」即可
	![git pus](/img/choice-of-ide-6.jpg)
8. 如果要把雲端的並更結果同步到本地端僅須點擊「向下的箭頭」即可
![git pull](/img/choice-of-ide-7.jpg)

到這裡，你已經學會了更動你部落格所有資料的方法了。

## Visual Studio 詳細介紹

首先請先到 Visual Studio 的官網[下載](https://code.visualstudio.com/Download)並安裝，安裝過程中你可能需要選擇安裝位置和一些設定選項，建議選擇預設值即可。(More will be coming...)

