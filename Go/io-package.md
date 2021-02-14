# IO package in Go Lang

- I have always confused about using IO package in Go. I felt like I do not understand the package, especially Writer and Reader interface.

### type Reader

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}
```

[doc](https://golang.org/pkg/io/#Reader)

- Reader is the interface that wraps the basic Read method.

- Read reads up to len(p) bytes into p. It returns the number of bytes read (0 <= n <= len(p)) and any error encountered.

- Making a new reader

    - `strings.NewReader(s string)`: strings.NewReader returns a new Reader reading from s. It is similar to bytes.NewBufferString but more efficient and read-only.

```go
f, err1 := os.Open("test.txt") // Read text from the file
if err1 != nil{ // Handle file opening error
    // ...
}
buf := make([]byte, 10) // make a byte slice can hold 10 bytes
n, err2 := f.Read(buf) // Store text in []byte format
if err2 == io.EOF { // Handle EOF error (with for loop, need to break out of the loop)
	fmt.Println("No text")
}
fmt.Println(n) // reads 10 bytes that are stored
```

### type Writer

[doc](https://golang.org/pkg/io/#Writer)

### func Pipe

[doc](https://golang.org/pkg/io/#Pipe)
