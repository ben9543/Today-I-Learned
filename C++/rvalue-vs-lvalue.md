# R-Value vs L-Value

## Citation

- [Youtube](https://www.youtube.com/watch?v=fbYknr-HPYE)

- [GeeksForGeeks](https://www.geeksforgeeks.org/lvalue-and-rvalue-in-c-language/#:~:text=R%2Dvalue%3A%20r%2Dvalue,of%20an%20assignment%20operator(%3D).)

## Definition

- `L-Value`:

    - Often represents as identifier.

    - Have a storage to the data.

    - The l-value is one of the following:

    1. The name of the variable of any type i.e, an identifier of integral, floating, pointer, structure, or union type.

    2. A subscript ([ ]) expression that does not evaluate to an array.

    3. A unary-indirection (*) expression that does not refer to an array

    4. An l-value expression in parentheses.

    5. A const object (a nonmodifiable l-value).


    6. The result of indirection through a pointer, provided that it isn’t a function pointer.

    7. The result of member access through pointer(-> or .)

- `R-Value`:

    - Refers to data value that is stored at some address in memory.

    - A temporary data.

## Simple example for R-Value and L-Value

```cpp
#include <iostream>
int main()
{
    // i => L-Value
    // 10 => R-Value
    int i = 10; // Okay
    10 = i; // Error
}
```

## Simple example for R-Value and L-Value with function

```cpp
#include <iostream>
int GetValue()
{
    return 10;
}
int& GetRef()
{
    static int i = 10;
    return i;
}
int main()
{
    int i = GetValue(); // Returns a R-Value (Temporary value)
    GetValue() = 5; // Not going to work because GetValue() returns a R-Value
    GetRef() = 5; // Work fine because the function returns L-Value
    // Now the value of static variable i in GetRef function is 5
    GetRef() = 10; // Work fine because the function returns L-Value
    // Now the value of static variable i in GetRef function is 10
}
```

## Simple example for R-Value and L-Value with reference (1)

```cpp
void SetValue(int& value)
{

}

int main()
{
    int i = 10;
    SetValue(i); // No problem because we are passing a lvalue
    SetValue(10); // Error::Initial value of reference to non-const must be a lvalue
}
```

## Simple example for R-Value and L-Value with reference (2)

```cpp
void AcceptBothRLvalues(const int& value)
{

}

int main()
{
    int i = 10;

    int& a = 10; // Error => Can not have the L-Value as a reference of the R-Value

    int& a = i; // Okay => Because we are storing a L-Value reference to a

    const int& a = 10; // Okay => Because using const, the compiler will create a temp variable for 10(e.g. int temp = 10) then will assign the variable to 'int& a'
}
```

- `int& a` means a is going to store a reference of integer type value, which is a L-Value

- The second line causes an error because we are storing a L-Value reference to `int& a`

- Using `const`: The compiler will create a temp variable for 10 (*e.g. int temp = 10*) then will assign the variable to `int& a`

- The function `AcceptBothRLvalues` shows how to create a function that accepts both R-Value and L-Value


## Simple example for R-Value and L-Value with `const` and `std::string`

```cpp
void PrintName(std::string& name)
{
    std::cout << name << std::endl;
}
void ConstPrintName(const std::string& name)
{
    std::cout << name << std::endl;
}

int main()
{
    std::string firstName = "Ben";
    std::string lastName = "Kweon";
    std::string fullName = firstName + lastName;

    PrintName(fullName);
    PrintName(firstName + lastName); // Error => passing a R-Value reference
    ConstPrintName(fullName);
    ConstPrintName(firstName + lastName); // Okay => Using a const for reference
    return 0;
}
```

- `PrintName(firstName + lastName)` will end up getting an error because `firstName + lastName` is a R-Value.

- This is why we end up using lots of `const` in the function parameters when passing by reference.


## R-Value reference

- Use `&&` operator

- Can define a function that only accepts R-Value reference

```cpp
void PrintName(std::string& name) // Only accepts L-Value
{
    std::cout << "L-Value Passed" << std::endl;
    std::cout << name << std::endl;
}
void PrintName(std::string&& name) // Only accepts R-Value(temp value)
{
    std::cout << "R-Value Passed" << std::endl;
    std::cout << name << std::endl;
}
int main()
{
    std::string name = "Ben";
    PrintName(name); // L-Value
    PrintName("Ben"); // R-Value
}


Output:

> L-Value Passed
> Ben
> R-Value Passed
> Ben

```
