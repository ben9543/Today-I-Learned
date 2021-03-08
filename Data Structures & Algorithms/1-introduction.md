# Introduction

## 1. Stack(Static memory allocation) vs Heap(Dynamic memory allocation)

### Static memory allocation

- When it is decided that how many bytes of memory is required at compile time. Size of memory is static, and it is decided when at the compile time.

    ```c
    void main(){
        int a; // 2bytes => allocated to Stack
        float b; // 4bytes => allocated to Stack
    }
    ```
### Dynamic memory allocation

- Programs can not access to heap directly. The way to access to heap memory is using **pointers**.

- Pointers are basically allocated on `stack` memory.

    ```c
    void main(){
        int* p; // A pointer being allocated on stack

        /*
        new int[5];=> C++ way
        (int*)malloc(5*sizeof(int)); => C way
        */

        p = new int[5]; // Allocates memory on `heap`

        // Delete assigned heap memory and make pointer as NULL
        delete []p;
        p = NULL;
    }
    ```

- Even though you make the pointer as NULL, it doesn't deallocate the memory on heap.

- You need to delete the dynamically located memory with `delete` keyword.
