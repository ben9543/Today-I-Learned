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


## 2. Physical Data Structure vs Logical Data Structure

### Physical Data Structure

#### 1. Array

- Array can be inside either stack or heap(pointing dynamically allocated memory by using a pointer)

#### 2. Linked List

- Always inside of heap memory

### Logical Data Structure

#### 1. Linear Data Structure

- Stack

- Queue

#### 2. Non-linear Data Structure

- Trees

- Graph

#### 3. Table Data Structure

- Hash Table

#### What is the difference from Physical Data Structure?

- We use one of Physical Data Structures `to implement` Logical Data Structures


## 3. Abstract Data Type (ADT)

### Any data type in any programming language will have ...

1. Representations of Data

2. Operation on Data

## 4. Time and Space Complexity

- Basically means how many times it takes to complete the process
