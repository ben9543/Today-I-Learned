# Useful `std::vector` methods

## What is `std::vector`?

- [Official Doc](https://www.cplusplus.com/reference/vector/vector/)

- std::vector implements an array, but unlike just normal arrays, **their size can change dynamically**, with their storage being handled automatically by the container.

- Pros: Compared to the other dynamic sequence containers (deques, lists and forward_lists), vectors are very efficient accessing its elements (just like arrays) and relatively efficient adding or removing elements from its end.

- Cons: For operations that involve inserting or removing elements at positions other than the end, they perform worse than the others, and have less consistent iterators and references than lists and forward_lists.

## Methods

### Insert & Delete

- `push_back()` & `pop_back()`: Most common methods for insert and delete from the end of the `std::vector`.

- `insert()`: Inserts an element to the vector array with the given position. But this is an inefficient operation compared to the other sequence containers. [Link](https://www.cplusplus.com/reference/vector/vector/insert/)

- `emplace()`: Inserts and element to the vector array. The container is extended by inserting a new element at position.

- insert vs emplace

    - insert *copies* objects into the vector.
    - emplace *construct* them inside of the vector.

- `clear()`: Removes all elements in vector.

### Index

- `at()`: Gives you the element at the given position.

### Iterator

- An iterator is an object (like a pointer) **that points to an element inside the container.** In the case of `std::vector`, the iterator of it will let us to access every element inside of the container(vector array).

- The most obvious form of an iterator is a pointer. A pointer can point to elements in an array and can iterate through them **using the increment operator (++).**

- `begin()`: Returns an iterator pointing to the first element in the vector.
- `end()`: Returns an iterator referring to the past-the-end element in the vector container.

```cpp
std::vector<int> myvector;

for (int i=1; i<=5; i++)
    myvector.push_back(i);

std::cout << "myvector contains:";

for (std::vector<int>::iterator it = myvector.begin() ; it != myvector.end(); ++it) // Increase the iterator
    std::cout << ' ' << *it;

std::cout << '\n';
```
