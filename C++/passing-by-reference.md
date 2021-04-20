# Passing by reference

- C++ automatically copy the value and pass it to functions.

- To pass the actual object, passing the reference would be the handy way to do it.

- Example

```c++

void changeName(Object &obj, std::string name){
    obj.name = name;
}

int main(){
    Object obj("sam");
    changeName(obj, "ben");
    return 0;
}

```

- Using `const` can be useful (or sometimes necessary) when passing objects by reference
