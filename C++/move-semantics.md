# Move Semantics in C++

## Citation

- [The Cherno Youtube Video](https://www.youtube.com/watch?v=ehMg6zvXuMYs)

## Purpose of move semantics

- Copying some primitive variables is not a big deal for the most of the time.

- But what if we are dealing with a massive object which its memory is allocated in heap?

```cpp
class String
{
public:
    String() = default;
    String(const char* string)
    {
        printf("Created!\n");
        m_Size = strlen(string);
        m_Data = new char[m_Size];
        memcpy(m_Data, string, m_Size);
    };

    String(const String& other)
    {
        printf("Copied!\n");
        m_Size = other.m_Size;
        m_Data = new char[m_Size];
        memcpy(m_Data, other.m_Data, m_Size);
    };

    ~String()
    {
        delete m_Data;
    };

    void Print()
    {
        for (uint32_t i = 0; i < m_Size; i++)
            printf("%c", m_Data[i]);
        printf("");
    };
private:
    char* m_Data;
    uint32_t m_Size;
};

class Entity{
public:
    Entity(const String& name)
        :m_Name(name){}; // Copying the value to m_Name

    void PrintName()
    {
        m_Name.Print();
    };
private:
    String m_Name;
};
int main()
{
    Entity entity(String("Cherno"));
    entity.PrintName();

    std::cin.get();
}
// Output:
// > Created!
// > Copied!
// > Cherno
```

- This has a little bit of problem because we are copying an object.

```cpp
class Entity{
public:
    Entity(const String& name)
        :m_Name(name){}; // Copying the value to m_Name

    Entity(String&& name)
        :m_Name((String&&)name){}; // Add a constructor that takes R-Value + Need to cast 'name' because otherwise Entity(const String& name) will get called.
    /*
    Entity(String&& name)
        :m_Name(std::move(name)){}; // => Using std::move instead of casting
    */
    ...
};

class String{
    ...
    String(const String& other)
    {
        printf("Copied!\n");
        m_Size = other.m_Size;
        m_Data = new char[m_Size];
        memcpy(m_Data, other.m_Data, m_Size);
    };
    String(String&& other) noexcept
    {
        printf("Moved!\n"); // Add an constructor
        m_Size = other.m_Size;
        m_Data = other.m_Data; // Instead of allocating new data and copying everything into it, we can just making it to point the same block of data

        other.m_Size = 0;
        other.m_Data = nullptr;
    };
    ...
}

```
