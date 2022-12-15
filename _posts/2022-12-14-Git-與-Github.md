# Git 與 Github
[^date_last_edit]
## 關鍵字
- Git（專案版本控制器）, Github（雲端專門來存放專案的平台，[other alternative](https://www.softwaretestinghelp.com/github-alternatives/)）, branch（版本分支）, repository（概念等同於資料夾）, ssh（跟雲端平台的連線方式）, https（跟雲端平台的連線方式）。
- Git的概念有點像是 Toyota-corolla-特仕板。你（Toyota）開了一個專案（corolla），而這個專案裡面有不同的版本分支（特仕板）。不同於汽車產線的開發流程，這些不同的分支是用來開發新功能或者做為 debug之用，所以最後都會匯集（merge）回到最主要的版本 master。至於這些不同的分支要怎麼管理，每間公司，每個團隊都有不一樣的作法，也都大同小異，你也可以嘗試設計你自己認為運作順暢的開發流程來管理你的版本分支。
- Cheat sheet（下面的`命令`基本上是依據使用流程排列）:
	- `git init`: 初始化某個資料夾，讓他成為一個 git環境，這時後會同時產生 master這個版本分支。
	- `git add .`, `git add file_names`: 將某檔案寫入git的版本控制裡面。
	- `git commit -m "message"`: 確認執行前面做過得所有git add （感覺像是在說我前面的指令都已經ready to go了）。
	- `git remote add nick_name ssh@remote\.ssh\.server` or `git remote nick_name add https://remote\.https\.server`: 增加雲端連線。
	- `git push`: 上傳。
	- `git pull`: 下載。
	- `git branch branch_name`: 創造一個新的版本分支叫做branch_name。
	- `git checkout branch_name`: 換到branch_name這個版本分支。
	- `git branch --set-upstream-to=remote_branch_name`: 設定目前所在的branch要連到雲端的哪個branch。
	- `git remote remove nick_name`: 刪除雲端的連線。

## 概念介紹
### 使用動機
Git是本地端版本控制器，Github是雲端的空間，這個空間有版本控制的功能。Github跟Git在做獨自開發且是小型專案時，都不是必須的，但是如果當程式已經進入到穩定階段，不希望一個不小心就把專案搞崩了，那Git就是必須的了。如果你希望你的code被看見，或者是有合作需求，那麼Github也會變成必須的工具。

會閱讀這個文件的人，我相信你就是一個程式小白，那你唯一想要知道的也不是什麼版本控制這些抽象概念，你想要知道的就是怎麼上傳下載你的資料到雲端而已，那就讓我們開始吧！
### 我剛開始使用時遇到的問題
對於Git我最剛開始遇到的問題是，Git在控制某個專案流程的時候，他是不會告訴你現在Git是在哪個專案的流程裡面。也因此，讓我很困或是不是我在使用git的時候要有進去跟出來這兩個動作。答案是當你在某個資料夾裡面呼叫`git init`之後他會產生一個叫做`.gitignore`的檔案，使得你呼叫`git init`*這個指令的資料夾跟它的子資料夾都會在這個git環境裡面。所以**我們進入離開被下`git init`指令的資料夾的同時，我們也就同時進入或離開某個git環境**。至於`git branch`是什麼？會看到這個文章的我假設你現在都只有再做solo開發，所以這個問題可以很重要，也可以很不重要。我們將在以後的篇幅再來討論這個問題。

Git要怎麼跟雲端的repository溝通？如果沒有這個功能，你大概會對於使用git的熱情大大降低，因為microsoft word都有`上一步`了，哪有什麼事情是`上一步`解決不了的，如果有就兩次`上一步`。我們在任何時候，如果發現某個local的repository需要跟雲端的repository建立連線，我們可以透過`git remote add path_to_cloud`去實現，目前一般都提供ssh與https的連線方式。https比較直覺，就是你去訪問網站，要輸入帳號密碼，然後登入之後就連線到你雲端的repository。ssh則是在連線前，先將某個我們生成的ssh public key(某種公開鑰匙)透過網頁將他直接傳送到你位於雲端的repository，然後在連線的時候，雲端網站就會拿那把公開鑰匙跟你電腦裡面在生成該把公開鑰匙時產生的ssh private key做比對，用來確認這個連線是符合權限的，不然所有人都可以連線到你的雲端repository了，這樣裸照就會被看光光拉。那為什麼需要ssh這個方法，如果已經有https這個方法了？答案當然是因為方便，並且也更容易實現自動化更新。否則每次執行自動跟新的時候還要手動輸入帳號密碼不是很白痴嘛？當然你可以把帳號密碼當作cookie一樣存在電腦裡面，但是我們有更好的方法，就是ssh。
### 第一次標準流程(初始化到設定雲端連線)
#### git init
初始化的標準組合技如下
```
	$ git init
	$ git add .
	$ git commit -m "initial"
```
[^initial]
在終端機輸入上面的指令你就已經把你所在的資料夾變成一個本地端的repository了（你可以試試看在這個資料夾與他的子資料夾裡面執行`git add .`，還有在這個資料夾外面執行`git add .`，你會發現在資料夾外面無法執行這段指令，這表示離開了資料夾，你就離開了某個git環境，所以環境跟環境之間不會互相干擾）。
#### git remote
[Github教學](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
USER: 你的github username
REPO: 你在github上某個repository的名稱
##### via ssh
- 分成三個步驟
	1. 生成ssh key
	2. 到 github上貼上剛剛生成的ssh public key
	3. 回到local repositoy設定連線(在這邊會設定跟雲端的哪個branch對接）
- 生成ssh key
	1. `$ sshkey-gen`
	2. 跟隨著程式的流程，可以都按`Enter`。如果需要比較高的安全性可以在passphrase這個問題裡面輸入一些句子，類似password的效用。但之後每次遠端連線時只要用到這個鑰匙就要輸入passphrase一次。
	3. 用打開id_rsa.pub文件[^怎麼開?]，這個檔案被存在上面流程的第一個問題裡面，如果你在那邊按了`Enter`，則它預設存在~/.ssh/id_rsa。
- 到 github上貼上剛剛生成的ssh public key
> 這一步其實所有網站都是大同小異，只是複製貼上的地方不同而已，如果你的雲端是終端機，那你就需要去問IT管理員，這段密鑰要被貼在哪裡了。
> Github 是在網站*右上角的頭像*裡面的*settings*這個頁面裡面，進入到這個頁面在最左邊的那排選項裡面找到 *SSH and GOG Keys*，接下來應該就很明顯了。
- 回到local repositoy設定連線
	1. `git remote add origin git@github.com:USER/REPO.git`[^origin]
##### via https
	`git remote add origin https://github.com/USER/REPO.git`[^origin]
##### 一些笨問題
- Q. 我可不可以設定多個連線方式？
> A. 當然可以，只要不要用同一個命名即可，換句話說，把origin改成別的名子就好。
- Q. 名子八字不好，可不可以改名？
> A. 當然可以，你還可以改連線位址，詳細請看[Github教學](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)。

### 第一次執行之後的流程
我們這邊假設大家都是程式小白，只想要上傳下載而已，完全沒有版本控制的概念，你在上面的設定完成之後，只要到終端機做以下操作就可以上傳下載了。
#### 上傳
```
	git add file_name1 file_name2 ...
	git commit -m "Fix a bug on line #//Add a class/attribute/method with name//Rewrite logic"
	git push
```
#### 下載
```
	git fetch
	git pull
```
[^1]

[^initial]: 你可以任意指定initial裡面的文字，中文也行。
[^怎麼開?]: 它基本上就是一個文件夾，所以你可以用*任意方法*打開（你甚至可以用word），但是最保險的方法會是在終端機上下`cat ~/.ssh/ubuntu_id_rsa.pub `這個指令，然後用滑鼠複製那串亂碼。
[^origin]: *origin* 可以換成任何名子，他就是後面那段網址的代稱。
[^1]: `git fetch` can be ignore if it is a solo project.
[^date_last_edit]: 2022/12/15