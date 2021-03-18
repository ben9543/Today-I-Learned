# memcpy

## Citation

- [Official Doc](https://www.cplusplus.com/reference/cstring/memcpy/)

## What it does?

- Copy block of memory

## Arguments

- `void * memcpy ( void * destination, const void * source, size_t num );`

- Example

    ```cpp
    int main(int argc, char** argv){
        char str[] = "Start stop";
        memcpy(str, "Benjamin Kweon", 4 * sizeof(char));
        printf("%s", str);
        // output: Benjt stop
        return 0;
    }

    ```
- The output of the example is `Benjt stop` because it copied 4 bytes of data("Benjamin Kweon") into `str`
