# Git relative refs

### What is refs?

- Moving around in Git by specifying commit hashes can get a bit tedious. In the real world you won't have a nice commit tree visualization next to your terminal, so you'll have to use git log to see hashes.

- Furthermore, hashes are usually a lot longer in the real Git world as well. For instance, the hash of the commit that introduced the previous level is fed2da64c0efc5293610bdd892f82a58e8cbc5d8. Doesn't exactly roll off the tongue...

- The upside is that Git is smart about hashes. It only requires you to specify enough characters of the hash until it uniquely identifies the commit. So I can type fed2 instead of the long string above.


### Using Carnet operator `^`

- You can move around your HEAD with using Carnet operator.

- For example, checking out to `main^` means checking out to the first parent of main. `main^^` means checking out to the second parent of main.

    ![](img/refs/1.png)

- You can also reference `HEAD` as a relative ref by doing `HEAD^`

### Using Tilde operator `~`

- You can move multiple levels at once with using Tilde operator.

### Real-world example

- `git branch -f main HEAD~3` : Using -f option to move (by force) the main branch to three parents behind HEAD.

- Before moving `HEAD`

    ![](img/refs/2.png)

- After moving `HEAD` with -f option

    ![](img/refs/3.png)
