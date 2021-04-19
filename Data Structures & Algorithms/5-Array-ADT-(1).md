# Array as Abstract Data Type

## ADT

### Two ways of creating an Array

1. Stack

2. Heap


### - Representation of Data

1. Array Space

2. Size

- Literally a size of an array

3. Length

- Number of elements in an array

- Example

    ```cpp
    int X[5];
    // X size: 5
    // X length: 0
    ```


### - The Set of Operations of Data (1)

```cpp
struct Array
{
    int size;
    int length;
    int* A;    
};
```

#### 1. Display()

```cpp
for(int i = 0; i < arr.length; i++)
    cout << arr.A[i] << endl;
```

#### 2. Add(x) / Append(x)
```cpp
arr.A[length] = x;
arr.length++;
```

#### 3. Insert(index, x)

- We need to shift all the elements from the index

- Then replace A[4] to x

- But we should check whether the index is exceeding its size or length.

```cpp
if( (index >= 0) && (index <= arr.length) )
{
    for(int i = arr.length; i > index; i--)
        arr.A[i] = A[i-1];
    arr.A[index] = x;
    arr.length++;
}
```

#### 4. Delete(index)

- i starts from index

- i should be less than length-1

- Set arbitrary x as A[index] (will be returned at the last)

- For loop will handle A[index]

```cpp
int x = 0;
if( (index >= 0) && (index <= arr.length) )
{
    x = arr.A[index];
    for(int i = index; i < arr.length - 1; i++)
        A[i] = A[i+1]
    arr.length--;
    return x;
}
return 0;
```

#### 5. Search(x)

- Binary Search

    * Only can apply to a sorted array.

    * Array size and length have to be the same.

    * low => the first index of an array.

    * high => the last index of an array.

    * mid => (low + high) / 2

    * key => the element we try to find out.

    * If Array[mid] > key => high = mid - 1 (shifting the index to the left)

    * If Array[mid] < key => low = mid _ 1 (shifting the index to the right)

    * If Array[mid] = key => return mid (The key value's index is found)
