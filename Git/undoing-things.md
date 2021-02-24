# Undoing things in Git

### 1. Undo commits `git commit --amend`

- It is important to understand that amending your last commit is rather *replacing* it with a new commit.

```bash
git commit -m 'Initial commit'
git add forgotten_file
git commit --amend
# Edit with vi editor
```

### 2. Unstaging a staged file `git reset HEAD <filename>`
