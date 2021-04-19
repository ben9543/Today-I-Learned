![](https://git-scm.com/images/logo@2x.png)
# Git

### [Git Book Study](https://bundy-mundi.github.io/Today-I-Learned/Git/git-book)

### [Advance Concepts](https://bundy-mundi.github.io/Today-I-Learned/Git/advanced-concepts)

### [Command Tips](https://bundy-mundi.github.io/Today-I-Learned/Git/commands-tips)

## Useful resources

- [Git book](https://git-scm.com/book/en/v2)

- [Learn git branching](https://learngitbranching.js.org/)

## Introduction to Git (Core Concepts)

### What is Git?

- Git is as type of version control system(VCS).

- A VCS enables you to record changes to files over time.

### Commits

- Commit is making snapshots for each version.

- Since commits are snapshots that store changes on the file system, we can go back and forth from one commit to another so that we can retrieve the changes back.

### 3 Areas of a Git repository.

* Working Tree: What we **see** on a file system. When we add, delete, and edit files we do that in the working tree.

* Staging Area(index):

* History: Equivalent to the commit graph. The history is kept in a `.git` directory.

    * .git: Holds an object database and the metadata that makes our repository. If this is sent to other person that person will have the whole project and full history.

### How do those 3 areas work?

1. Make changes in working directory.

2. Add the only wanted changes to the staging area.

3. Make a commit(history) and only the change in the staging area will be put in the commit.
