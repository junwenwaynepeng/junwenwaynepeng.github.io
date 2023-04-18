---
layout: page
title: 教學網站建立教學
subtitle: Git 與 Github
right-toc: true
left-toc: true
book: jekyll-intro
preview_page: 0-intro
next_page: 2-choice-of-ide
---

# Git與Github

Git 是一個開放原始碼的分散式版本控制系統，通過它你可以輕鬆的追蹤、記錄你的程式碼變更以及合併這些變更。而 Github 則是一個基於 Git 的網路托管服務，透過它你可以將你的程式碼上傳到網路上，並與他人進行協作或者分享。

在這個步驟你將完成兩個簡單的動作與一個複雜的動作。

第一步，我們將請你先申請一個 Github 的帳戶，並且將[我的模板](https://github.com/junwenwaynepeng/jekyll-template)複製(Fork)一份到你的Github帳戶底下。

第二步，請下載並安裝 Git。

第三步，建立連線。

## 申請Github帳戶與Fork我的模板

1. 前往[Github官方網頁](https://github.com/)。
2. 依據指示申請你的 Github 帳號。
3. 前往[我的模板](https://github.com/junwenwaynepeng/jekyll-template)
4. Fork 模板到你的 Github 專案，並且請依照 `Github帳號.github.io` 這樣的規則來命名新的專案
5. 約一分鐘後，前往 `https://Github帳號.github.io` 檢查你的網頁有沒有出現。

## 安裝Git

1. 前往[Git下載頁](https://git-scm.com/downloads)
2. 依據你的電腦配置（應該是 Windows 64位元版本）下載安裝檔
3. 執行安裝檔，根據只是完成安裝，不需要任何客製化設定。

## 建立本地端（你的電腦）與Github的連線

本步驟分成三部份，生成鑰始，將鑰始插入 Github 的鑰始孔，建立本地端與你部落格的連線。

### 生成SSH Key

SSH Key 是一種安全的加密方式，用來驗證使用者和伺服器之間的身份，以保護數據的傳輸安全。在使用 Git 與 GitHub 進行代碼版本控制時，你需要建立一組SSH Key，以將你的本地代碼傳送到GitHub 上。

要建立 SSH Key ，你可以遵循以下步驟：

1. 打開 Git Bash 或命令提示字元 (在 Windows 搜尋 Git Bash 應用程式)，輸入以下命令：
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
2. 輸入上面的命令後，你將被要求提供要保存 SSH Key 的文件名和路徑。預設情況下，它們會存儲在 `~/.ssh` 目錄中。我通常都使用預設的路徑。

3. 接下來，你需要輸入一個安全的密碼短語。不需要密碼短語也無所謂，我的建議是不需要使用。

4. 完成上述步驟後，你的 SSH Key 就已經建立好了。你可以在 `~/.ssh` 目錄下找到兩個文件：`id_ed25519` 和 `id_ed25519.pub`，這就是你的 SSH Key 。如果你不確定如何移動到該文件內，可以在終端機內輸入。
```bash
cd ~/.ssh
```

5. 用任意的文字編輯器開啟 `id_ed25510.pub` 。並複製該文件裡面的所有內容，這樣你手中就握有一把 SSH Key 了。如果你不確定如何開啟該文件，可以嘗試繼續在剛剛的終端機內下以下指令
```bash
vi id_ed25510.pub
```

### 將鑰始插入 Github 

最後，你需要將公鑰（`id_ed25519.pub`）添加到你的 GitHub 帳戶中。將 SSH Key 插入 GitHub 帳戶是將本地端 SSH Key 與 GitHub 帳戶進行連結，讓你的本地端 Git 與 GitHub 進行通訊和操作的必要步驟。以下是一個詳細的步驟解說：

1. 登入 GitHub 帳戶後，點擊右上角的頭像圖示，從選單中選擇「Settings」。
![profile photo](/img/github-ssh-1.jpg)
![setting](/img/github-ssh-2.png)


2. 在頁面左側的選單中選擇「SSH and GPG keys」，再點擊「New SSH Key」。
![SSH and GPG Keys](/img/github-ssh-3.png)
![New SSH Key](/img/github-ssh-4.jpg)

3. （等同於生成 SSH Key 的步驟5）開啟你之前使用 ssh-keygen 指令產生的公鑰檔案（通常是 ~/.ssh/id_rsa.pub 或是 ~/.ssh/id_ed25519.pub）。複製整個檔案的內容，包含開頭的 ssh-rsa 或是 ssh-ed25519，到 GitHub 頁面的「Key」欄位中。
![Add Key](/img/github-ssh-5.png)

4. 為這個 SSH Key 取一個描述性的名稱，例如「My Personal Laptop」或是「Work Desktop」，並輸入到「Title」欄位中。

5. 點擊「Add SSH Key」按鈕，即可完成 SSH Key 的插入。

完成以上步驟後，你的本地端 SSH Key 就會與 GitHub 帳戶成功連結，你可以在本地端的 Git 中使用 `git clone` 、 `git pull` 、與 `git push` 等指令，和遠端的 GitHub 儲存庫進行同步和操作。

### 連線到你的部落格

我們將把 Github page（你的部落格）與你的電腦進行連線，這樣未來你就可以在自己的電腦上編輯你的部落格內容。

1. 在 GitHub 上的存儲庫頁面上，點擊綠色的「Code」按鈕，然後從下拉菜單中選擇使用 SSH 進行 clone。

2. 複製所選協議的 URL。

3. 回到你的終端機或命令提示字元，先將終端機目錄移動到要放置檔案的目錄，例如： `~/` 或是 `~/OneDrive` （我自己選擇放置在 OneDrive 底下，這樣可以達成雙備份）。如果你不確定怎麼做，請在終端機下以下其中一個命令。
```bash
cd ~
```
或是
```bash
cd ~/OneDrive
```

4. 在你的終端機或命令提示字元，輸入 git clone 命令，然後在命令後面粘貼你剛才複製的 URL ，類似如下所示：
```bash
git clone git@github.com:your-username/your-username.github.io.git
```
請注意，your-username 應替換為你的 GitHub 帳戶名稱。

5. 按下[Enter]鍵，等待 Git 完成 clone 操作。完成後，存儲庫的所有文件都會出現在你的選定目錄中。

現在，你已經成功地將 GitHub 存儲庫 clone 到本地。如果你對這些文件進行了任何更改，可以使用 `git add` 和 `git commit` 命令將它們提交到你的本地存儲庫中，然後使用 `git push` 命令將它們推送到 GitHub。你可以在終端機裡面移動到你的部落格目錄內，然後輸入 `git push` 或 `git pull` 進行測試。如果一切順利，你應該會在終端機內看到 `Everything up-to-date.` 或是 `Already up to date.`
