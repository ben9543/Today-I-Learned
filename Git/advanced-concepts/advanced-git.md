# Advanced Git

[Youtube Video - Advanced Git Tutorial](https://www.youtube.com/watch?v=0SJCYPsef54&t=29s)

### 1. Commit by hand (repo internals)

* `echo "Some text" | git hash-object -w --stdin` : Create an object in .git/objects/ folder, and displays the hash on the terminal.

* `git cat-file -p <HASH>` : Prints the context of the commit.

* `git update-index --add --cacheinfo <PERMISSION> <HASH> <FILE>` : Add the change to staging area.

* `git write-tree` : Create a tree object in .git/objects/ folder. (if you cat-file the tree object's hash, you will find out that there exists a file that added)

* `git commit-tree <TREE_HASH> -m <MESSAGE>` : Make a commit. Create a commit object in .git/objects/ folder.

* `git update-ref refs/heads/mastser HEAD` : Update refs

* `git checkout HEAD -- <specific file>` : Go(checkout) to HEAD, but I just want to operate on the <specific file>.

* `--` : Seperates all the options switches and parameters.

* `git cat-file -t <HASH>` : Check the type of the object.

### 2. Rebase (from 20:00)

- Typical merge: Creates a new commit when putting two branches(A and B) into one. It takes all the blobs from

    1. The most recent common anscester commit of those two branch

    2. The latest commit from A branch.

    3. The latest commit from B branch.

### 3. Use reflog and reset!

- Typical usage of reset: `git reset --hard HEAD@{3}`

- NOTICE: Be aware of your current branch when you are using `git reset`


### Yet

- Interactive Rebase

- rebase-on-pull       

- External diff tools

- Advanced logging
