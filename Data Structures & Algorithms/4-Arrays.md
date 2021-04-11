# Arrays

## 2D Arrays in C++

- There are three different ways to create 2D array in C++

1. Everything in the stack

```cpp
int A[3][4];
```

2. Partial in the heap, partial in the stack

```cpp
int* A[3];
A[0] = new int[5];
A[1] = new int[3];
A[2] = new int[3];
```

3. Everything in the heap

```cpp
int** A;
A = new int*[3];
A[0] = new int[5];
A[1] = new int[5];
A[2] = new int[5];
```
