# Undoing things in Git

[official doc](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)

### 1. Undo commits `git commit --amend`

- It is important to understand that amending your last commit is rather *replacing* it with a new commit.

```bash
git commit -m 'Initial commit'
git add forgotten_file
git commit --amend
# Edit with vi editor
```

### 2. Unstaging a staged file `git restore --staged <filename>`

- If you add a wrong changes, then you need to unstage the change.

- There is two way of doing it, one with `git reset HEAD <file>`, and one with `git restore --staged <filename>`

- Official documentation:
> Git version 2.23.0 introduced a new command: git restore. It’s basically an alternative to git reset which we just covered. From Git version 2.23.0 onwards, **Git will use git restore instead of git reset for many undo operations.**

```bash
git add . # Accidentally add every changes in the working directory
git status # Check which file to unstage
git restore --staged test.md # Unstage test.md file
git status # Check Changes to be committed once again
```
