# Git HEAD

- HEAD is the symbolic name for the currently checked out `commit --` it's essentially **what commit you're working on top of.**

- HEAD always points to the most recent commit which is reflected in the working tree. Most git commands which make changes to the working tree will start by changing HEAD.

- **Normally HEAD points to a branch name** (like bugFix). When you commit, the status of bugFix is altered and this change is visible through HEAD.

### Detaching HEAD

- Detaching HEAD just means attaching it to a commit instead of a branch.

- In order to do this, we need to checkout to the specific commit with its hash, not to the entire branch.

- Commands: `git checkout C1(hash)`
