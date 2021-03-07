# Git reset vs Git revert

- [bit bucket doc](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting#:~:text=Reverting%20undoes%20a%20commit%20by%20creating%20a%20new%20commit.&text=Contrast%20this%20with%20git%20reset,changes%20on%20a%20private%20branch.)

### 1. `git reset`

- With `git reset`, you can actually *undo* the changes.

- First, need to checkout to the branch that you want to undo some commits.

- Then, move HEAD with `git reset` command as many steps as you want to go back.

- *ex) `git checkout hotfix && git reset HEAD~2` => undo two commits of hotfix branch*

- Options

    - --soft: The staged snapshot and working directory are not altered in any way.

    - --mixed: The staged snapshot is updated to match the specified commit, but the working directory is not affected. This is the default option.

    - --hard: The staged snapshot and the working directory are both updated to match the specified commit.

### 2. `git revert`

- `git revert` is a little bit different from `git reset`

- Reverting undoes a commit by **creating a new commit.** This is a safe way to undo changes, as it has no chance of re-writing the commit history.

- Example of `git checkout hotfix && git revert HEAD~2`

    ![](https://wac-cdn.atlassian.com/dam/jcr:73d36b14-72a7-4e96-a5bf-b86629d2deeb/06.svg?cdnVersion=1478)


### Notice that...

- Contrast `git revert` with `git reset`, which *does* alter the existing commit history. For this reason, `git revert` should be used to undo changes on a **public branch**, and `git reset` should be reserved for undoing changes on a **private branch.**

- You can also think of `git revert` as a tool for **undoing committed changes**, while `git reset` HEAD is for **undoing uncommitted changes**.

- Table

    | git revert | git reset |
    |------------|-----------|
    | undoing committed changes  |  undoing uncommitted changes |
    | public branch |    private branch   |
    | effects on the commit history | effects on the working directory |

### What if I want to 'undo' `git reset`?

- [Stackoverflow](https://stackoverflow.com/questions/2510276/how-to-undo-git-reset)

- Use `git reflog` && `git reset HEAD@{<NUMBER_OF_STEPS>}`

- To see commits for the specific branches, use `git reflog show <BRANCH_NAME>`
