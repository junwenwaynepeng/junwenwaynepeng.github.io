# Sage Develop Guide 中文版

## 計畫目的
我希望能讓大家認識Sage開源開發的文化。

## 如何安裝sage develop
如果要參與sage的開發，那就必須要先學會

- 如何從 sage的 server或是 github上面下載 sage的原始碼，這邊最方便的方法會是用 `git pull`。這邊不會過多著墨 git的概念，只會用最簡短的方式幫助大家建立連線到 sage自己的 server或是 github。
- 如何從 sage的 source code安裝 sage。

### 下載

**基本步驟**
1. 申請 sage trac帳號或是 github帳號。
2. 生成 ssh key，交給 sage trac或是 github。
3. 本地端用 git建立一個 repository，並設定好連線位址，然後下載。

### 安裝

**基本步驟**
1. 先依照 [Develop Guid](https://doc.sagemath.org/html/en/installation/source.html#)安裝相依套件。
2. 執行 `./configure`。
3. 依照 `./configure`指示安裝相依套件。
4. 再次執行 `./configure`。
5. 執行 `make`。

### 下載與安裝步驟詳細解說