# Tips for Git log

1. `git log -p -2` : Shows exact changes in detail

2. `git log --stat` : Shows diff

3. `git log --pretty=oneline` : Shows logs in just one line

4. `git log --pretty=format:<format>` : Specifies your own log output format

- ex) `git log --pretty=format:"%h - %an, %ar : %s"`

5. `git log --graph --pretty=oneline --abbrev-commit` : Shows logs with git tree graph

- [Useful specifiers](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History#pretty_format)
