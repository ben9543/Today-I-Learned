# Basic Grammar in C / C++

## Passing array as a parameter

- When you are passing an array to a function, it means you are passing its pointer.

- But if you specify the parameter as an array pointer, than it **only accepts** an array pointer. It cannot be same data type's pointer.

```c

// function fun accept either int array ptr or int ptr
void fun(int * A, int n){
    // ...

}

// function fun2 'only' accept int array ptr
void fun2(int A{}, int n){
    // ...

}
```

## Assigning a new array with a function

- Example

    ```c
    int [] fun(int n){ // You can also return int * insted of int []
        int * p;
        // Now p points to the size 5 memory that dynmically Assigned in heap.
        p = (int *)malloc(n*sizeof(int));
        return p;
    }
    int main(){
        int * A;
        A = fun(5); // Now 'A' points to the address where 'p' had in the fun() function.
    }
    ```
