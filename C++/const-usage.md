# Const Usage

## Citation Links

- [Stackoverflow](https://stackoverflow.com/questions/5598703/c-const-usage-explanation)

- [Const Correctness](https://isocpp.org/wiki/faq/const-correctness)

- [Const Memeber Function Post geeksforgeeks](https://www.geeksforgeeks.org/const-member-functions-c/)

## 1. `const` with variables

### `const X*`

- `const X* p`: p points to an X that is const

- `X* const p`: p is a const pointer to an X that is non-const

- `const X* const p` : p is a const pointer to an X that is const

### `const X& x`

- It means x aliases an X object, but you can’t change that X object via x.

### Equivalent expressions

- `X const& x` = `const X& x`

- `X const* x` = `const X* x`


### Examples

```c
/* when p is const */
int main(){
    int* const p; // 'p' is const
    int newNum = 1;
    p = &newNum; // since the pointer p is const, it will complain
}

/* when the type is const */
int main(){
    int const* p; // 'int' is const
    int newNum = 1;
    p = &newNum; // since the pointer p is not const, it will not complain
}
```

## 2. Const memeber function in C / C++

- The objects of a class can also be declared as `const`

- An object declared as `const` **cannot be modified** and hence, **can invoke only const member functions** as these functions ensure not to modify the object.

- Non-const memeber functions **can call both const member function and non-const functions**

- If a const member function contains any lines that change the value of class, it will cause an error.

    - *ex) `void changeName() const {this.name="Ben";};` => Error*

    ```C
    class Test {
        int value;
    public:
        Test(int v = 0) {value = v;}
        int getValue() const {return value;} // const memeber function
        int _getValue() {return value;} // non-const  function
    };

    int main() {
        const Test t; // Declared as const

        cout << t.getValue(); // This is fine
        cout << t._getValue(); // Cause error because it is not a const memeber function

        return 0;
    }
    ```

- A typical error message we get when we call non-const  functions by using const objects.

    ```
    passing 'const Test' as 'this' argument of 'int Test::getValue()' discards qualifiers
    ```
