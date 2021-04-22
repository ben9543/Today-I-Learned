# Array ADT (3)

## Merging (sorted) Array

- To 'merge', we need to combine two arrays, sorted, without overlaps.

- It's simple when you have sorted arrays. All you have to do is to compare each element and push the lower number to the new array, and increase the index of the array that has the lower number.


```cpp
int i = 0;
int j = 0;
int k = 0;
if(A[i] < B[i])
    C[i++] = A[j++];
else
    C[i++] = B[k++;]
```
