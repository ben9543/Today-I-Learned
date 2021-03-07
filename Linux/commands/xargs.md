# xargs

## Citation Links

- [Linux commands: xargs](https://flaviocopes.com/linux-command-xargs/#:~:text=The%20xargs%20command%20is%20used,the%20input%20of%20another%20command.)


## Useful Options

- `-p`: Pauses to ask execution for each iteration

    ```bash
    cat test.txt | xargs -p rm
    ```

- `-n1`: Lets you tell xargs to perform one iteration at a time, so you can individually confirm them with `-p`

    ```bash

    cat test.txt | xargs -p -n1 -I % sh -c 'echo "%\n"'

    sh -c 'echo "file1.txt\n"'?...<USER_INPUT> y
    file1.txt # echo

    sh -c 'echo "file2.txt\n"'?...<USER_INPUT> n
    # Skip the interation

    sh -c 'echo "file3.txt\n"'?...<USER_INPUT> y
    file3.txt
    ```

- `-I`: Store xargs into a specific variable

    ```bash
    # Storing each xargs as %
    command1 | xargs -I % sh -c 'command2 %; command3 %`
    ```
