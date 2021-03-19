# Move Assignment Operator & `std::move`

- [Youtube](https://www.youtube.com/watch?v=OWNeCTd7yQE)

- [Documentation(en)](https://en.cppreference.com/w/cpp/utility/move)

- [Documentation(kr)](https://modoocode.com/301)

## Definition

```cpp
template< class T >
constexpr std::remove_reference_t<T>&& move( T&& t ) noexcept;
```

## Why we use it

1. There are times when we want to move object into another object without copying the value.

2. The traditional way of doing this is using type casting to R-Value reference. For example,

    ```cpp
    class Object{
    public:
        Object(string name)
            :name(name){};
        string name = name;
    };

    int main()
    {
        string name = "Ben";
        Object obj = Object((string&&)name); // Passing R-Value reference
        cout << obj.name; // Ben
        cout << name; // Prints nothing - the value has been moved
    }
    ```

3. Using `std::move`, we can achieve the exact same thing

    ```cpp
    class Object{
    public:
        Object(string name)
            :name(name){};
        string name = name;
    };

    int main()
    {
        string name = "Ben";
        Object obj = Object(std::move(name)); // Passing R-Value reference
        cout << obj.name; // Ben
        cout << name; // Prints nothing - the value has been moved
    }
    ```

## General Usage

- `std::vector`: We can use `push_back()` without copying the value. *ex) `v.push_back(std::move(some_var));` 


## Interesting Experiment

- Swapping?

    ```cpp
    class Object{
        public:
            Object(string name)
                :name(name){};
            string name = name;
    };

    int main()
    {
        string name = "Ben";
        string name2 = "Sam";
        Object obj = Object(std::move(name)); // Passing R-Value reference
        Object obj2 = Object(std::move(name2));

        obj = std::move(obj2);
        // Object obj3 = std::move(obj2); => Works fine

        cout << "Obj1: " << obj.name << endl;
        cout << "Obj2: "<< obj2.name << endl;

        // Output:
        // > Obj1: Sam
        // > Obj2: Ben (???)
    }
    ```
