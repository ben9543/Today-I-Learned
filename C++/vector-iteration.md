# How to iterate `std::vector`

## Links

- [Cpp Tutorial](https://riptutorial.com/cplusplus/example/1678/iterating-over-std--vector)

## 1. Using `vector::begin()` & `vector::end()`
```cpp
for(std::vector<int>::iterator it = std::begin(v); it != std::end(v); ++it) {
    std::cout << *it << "\n";
}
```

## 2. Using `auto` with `for loop`

```cpp
for (auto & element : vector) {
    element.doSomething ();
}
```

## 3. Using for loop with index

```cpp
// Using a for loop with index
for(std::size_t i = 0; i < v.size(); ++i) {
    std::cout << v[i] << "\n";
}
```
