# 3. Recursion Types

## 1) Tail Recursion

- If the recursive call is the last statement of the function

- Everything will perform at calling time only

- Example

    ```cpp
    void fun(int n)
    {
        if(n > 0)
        {
            // Lots of functions ...
            fun(n - 1);
            // fun(n - 1) + n; => Not tail recursion
        }
    }
    ```

## 2) Head Recursion

- If the recursive call is the first statement of the function

- All the process will perform after the recursive call (no statement, no operation before the function call)

- The function doesn't do anything at the calling time

- Example

    ```cpp
    void fun(int n)
    {
        if(n > 0)
        {
            fun(n - 1);
            // Lots of functions ...
            // fun(n - 1) + n; => Not tail recursion
        }
    }
    ```

## 3) Tree Recursion

- Example

    ```cpp
    void fun(int n)
    {
        if(n > 0)
        {
            fun(n - 1);
            fun(n - 1);
        }
    }
    ```
