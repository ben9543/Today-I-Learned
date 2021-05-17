# Git Switch

## Links

- [Git book link](https://git-scm.com/docs/git-switch)

## Usage

- It works same as checkout, but when you are dealing with remote branches this can be useful.

- When you clone any repository, it only clones the master branch as your local branch.

```bash
$ git clone <SOME_REPO>

# There is only one local branch, which is master.
$ git branch -al
> * master
  remotes/origin/HEAD -> origin/master
  remotes/origin/backend
  remotes/origin/master

$ git branch
> * master
```

- If you want to start a new local branch from a remote branch of the **same name**, you would do:

```bash
git switch backend
```

- If you want to start a new local branch from a remote branch of the **different name**, you would do:

```bash
git switch -c othername-for-backend-branch
```

