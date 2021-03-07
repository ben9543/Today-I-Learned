# Git Branching Workflows

- [Git book link](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)

## Branching

### What is branching?

- Branching means you diverge from the main line of development and continue to do work without messing with that main line.

### 2. How does Git store its data?

- Git stores data as a series of snapshots.

### Local Branching

#### 1. Long-Running Branches

![](https://git-scm.com/book/en/v2/images/lr-branches-2.png)

- Having multiple long-running branches isn’t necessary, but it’s often helpful, especially when you’re dealing with very large or complex projects.

#### 2. Topic Branches

- A topic branch is a short-lived branch that you create and use for a single particular feature or related work.

- Topic branches are useful in projects of any size.

- Git allows us to make it easier and less cost to work around with branches.

- It’s important to remember that in this topic, all branches are completely local. When you’re branching and merging, everything is being done only in your Git repository — there is no communication with the server.

### Remote Branching

#### 1. What are remote branches?

- Remote references are references (pointers) in your remote repositories, including branches, tags, and so on.

- You can pull and push changes from remote branches.

- Git automatically creates `origin/master` remote branch when you clone the repository from Github.

- Commands for displaying remote branches:

    * `git ls-remote <remote>`: Shows hash of remote branches

    * `git remote show <remote>`: Shows remote branches' information in detail.

    * `git remote -v`: Lists remote urls.

#### 2. When you are using remote branches...

- Keep in mind that `local work` and `remote work` can diverge.

- For example, if you do some work on your local master branch, and, in the meantime, someone else pushes to *ex) git.ourcompany.com* and updates its master branch, then your histories move forward differently.


#### 3. Synchronize changes from remote branch

- So, it is a problem when your local work does not catch up the latest updates of original repository. Now we need to synchronize it.

- Steps are pretty simple:

    1. Add remote url to your local .git by doing `git remote add <name> <url>`

    2. Fetch data by doing `git fetch <remote> <branch>`

    3. Git will set remote-tracking-branch called `<remote>/<branch>`

    4. Merge the branch either right away or after you made more commits

- Using `git pull <remote> <branch>` would do the same job, unless it merges the branch simultaneously after it gets created.
