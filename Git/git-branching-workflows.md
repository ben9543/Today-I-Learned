# Git Branching Workflows

- [Git book link](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)

- Now that you have the basics of branching and merging down, what can or should you do with them?

## Local

### 1. Long-Running Branches

![](https://git-scm.com/book/en/v2/images/lr-branches-2.png)

- Having multiple long-running branches isn’t necessary, but it’s often helpful, especially when you’re dealing with very large or complex projects.

### 2. Topic Branches

- A topic branch is a short-lived branch that you create and use for a single particular feature or related work.

- Topic branches are useful in projects of any size.

- Git allows us to make it easier and less cost to work around with branches.

- It’s important to remember that in this topic, all branches are completely local. When you’re branching and merging, everything is being done only in your Git repository — there is no communication with the server.

## Remote

### 1. Remote Branches

- Local and remote work can diverge

- If you do some work on your local master branch, and, in the meantime, someone else pushes to git.ourcompany.com and updates its master branch, then your histories move forward differently.
