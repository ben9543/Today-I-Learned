# Git Rebase

[official doc](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

- In Git, there are two main ways to integrate changes from one branch into another: the **rebase** and the **merge**.

- Rebase provides cleaner git history than merge.

### Basic Rebasing

- Command: `git rebase <branch>`

- Make sure to checkout to the branch that you want to **attach behind**

- For example, if you want to rebase `test` branch to `main` branch, need to checkout to `test` and rebase it to `main`.

- Create `test` branch

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/rebase/1.PNG)

- Make a commit (C2)

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/rebase/2.PNG)

- Checkout to main branch and make a commit (C3)

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/rebase/3.PNG)

- Checkout to test branch and rebase it to main branch (`git checkout test && git rebase main`)

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/rebase/4.PNG)

- Checkout to main branch and rebase (or merge) it to test branch (`git checkout main && git rebase|merge test`)

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/rebase/5.PNG)

- You may want to delete `test` for cleaner git history.

- Used commands

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/rebase/6.PNG)

### 2. More Interesting Rebases

- You can also have your rebase replay on something other than the rebase target branch.

- For example. You branched a topic branch (server) to add some server-side functionality to your project, and made a commit. Then, you branched off that to make the client-side changes (client) and committed a few times. Finally, you went back to your server branch and did a few more commits.

    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-1.png)

- In this case, let's suppose we want to merge client-side changes until it's tested further.

- You can take the changes on client that aren’t on server (C8 and C9) and replay them on your master branch by using the --onto option of `git rebase`.

- We need to let git know that `client` branch is rooted `server` branch but want to rebase it earlier than `server` branch.

-  Command: `git rebase --onto master server client`

- Explanation: `git rebase --onto <where-to-rebase> <where-rooted> <which-to-rebase>`

    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-2.png)

- Then merge client branch into master

- Command: `git checkout master && git merge|rebase client`

    ![](https://git-scm.com/book/en/v2/images/interesting-rebase-3.png)
