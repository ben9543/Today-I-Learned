# Files and Directories

## Linux Permissions

- rwx: Read, write and execute (7)

- r-x: Read, and execute (5)

- r--: Read (4)

- 700: User

- 070: Group

- 007: Other

- Example: `755` => `User: Read, write and execute | Group: Read and execute | Other: Read and execute`

## Related PHP functions

- `chmod() | chgrp() | chown()` : Change mode, group, owner

- `fileperms() & decoct()`: Return the permission of the file. `decoct()` converts the code into a human readable decimal number.

## Checking the validity of files

- `file_exists()`

- `is_writeable()`

- `is_readable()`

## Wrting & Reading from files

### Classic way

- `fopen($filepath)`

- `fread($filestream)`

- `fwrite($filestream)`

- `fclose()`

### Handy way

- `file_get_contents($file)`

- `file_put_contents($file, $content, $flag)`: $content can be either a string, an array or a stream resource.

    * `FILE_APPEND`(flag): If file filename already exists, append the data to the file instead of overwriting it.

- `readfile($path)`: It reads file contents and 'echo' it right away. Returns `false` if the function failed. 
