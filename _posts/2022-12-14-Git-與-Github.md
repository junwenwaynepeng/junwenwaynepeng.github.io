# Git 與 Github

## 關鍵字
- Git, Github, branch, repository, ssh, https
- `git init`
- `git add .`
- `git commit -m "message"`
- `git push`
- `git pull`
- `git branch branch_name`
- `git checkout`
- `git remote add ssh@remote\.ssh\.server nick_name` or `git remote add https://remote\.https\.server` nick_name (default nick name is origin)
- `git branch --set-upstream-to=remote_branch_name`
- `git remote remove nick_name`

## 概念介紹
### 使用動機
Git是本地端版本控制器，Github是雲端的空間，這個空間有版本控制的功能。Github跟Git在做獨自開發且是小型專案時，都不是必須的，但是如果當程式已經進入到穩定階段，不希望一個不小心就把專案搞崩了，那Git就是必須的了。如果你希望你的code被看見，或者是有合作需求，那麼Github也會變成必須的工具。
### 使用時會遇到什麼問題
對於Git我最剛開始遇到的問題是，Git在控制某個專案流程的時候，他是不會告訴你你現在的Git是在哪個專案的流程裡面。也因此，讓我很困或是不是我在使用git的時候要有進去跟出來這兩個動作。答案是當你在某個資料夾裡面呼叫`git init`之後他會產生一個叫做`.gitignore`的檔案，這個資料夾跟它的子資料夾都會在這個git環境裡面。所以我們進入離開被下`git init`指令的資料夾的同時，我們也就同時進入或離開某個git環境。至於`git branch`是什麼？會看到這個文章的我假設你現在都只有再做solo開發，所以我們稍後再來處理這個問題。

Git要怎麼跟雲端的repository溝通？如果沒有這個功能，你大概會對於使用git的熱情大大降低，因為microsoft word都有`上一步`了，哪有什麼事情是`上一步`解決不了的，如果有就兩次`上一步`。我們在任何時候，如果發現某個local的repository需要跟雲端的repository建立連線，我們可以透過`git remote add path_to_cloud`去實現，目前一般都提供ssh與https的連線方式。https比較直覺，就是你去訪問網站，要輸入帳號密碼，然後登入之後就連線到你雲端的repository。ssh則是在連線前，先將某個我們生成的ssh public key(某種公開鑰匙)透過網頁將他直接傳送到你位於雲端的repository，然後在連線的時候，雲端網站就會拿那把公開鑰匙跟你電腦裡面在生成該把公開鑰匙時產生的ssh private key做比對，用來確認這個連線是符合權限的，不然所有人都可以連線到你的雲端repository了，這樣裸照就會被看光光拉。那為什麼需要ssh這個方法，如果已經有https這個方法了？答案當然是因為方便，並且也更容易實現自動化更新。否則每次執行自動跟新的時候還要手動輸入帳號密碼不是很白痴嘛？當然你可以把帳號密碼當作cookie一樣存在電腦裡面，但是我們有更好的方法，就是ssh。

好，那當我們建立連線了，我怎麼知道我連線到的是雲端上的哪個branch？換句話說，我怎麼知道我pull或push的時候，本地端的branch跟雲端的branch是相符的？如果我們解決了以上的這兩個問題，我們才能更進一步去回答跟人合作的時候如何去做版本控制。
### 第一次標準流程(初始化到設定雲端連線)
#### git init
初始化的標準組合技如下
```
{
	git init
	git add .
	git commit -m "initialization"
}
```
在終端機輸入上面的指令你就已經把你所在的資料夾變成一個本地端的repository了。
#### git remote
##### via ssh
##### via https

### 第一次執行之後的流程
#### 上傳
```
{
	git add file_name1 file_name2 ...
	git commit -m "Fix a bug on line #//Add a class/attribute/method with name//Rewrite logic"
	git push
}
```
#### 下載
```
{
	git fetch
	git pull
}
```[^1]

[^1]: `git fetch` can be ignore if it is a solo project
