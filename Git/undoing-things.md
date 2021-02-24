# Undoing things in Git

### 1. Undo commits

- `git commit --amend`

- It is important to understand that amending your last commit is rather *replacing* it with a new commit.

```git
git commit -m 'Initial commit'
git add forgotten_file
git commit --amend "New commit"
```
