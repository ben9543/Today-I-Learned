# Getting to know `bytes.Buffer`

### What is the `byte` type?

- Bytes is one of the primitive types in Go.

- One of the big difference in Go than other languages is that Go does not have the `char` type

- Instead of `char`, Go has `byte` and `rune` types.

- The byte data type represents ASCII characters and the rune data type represents a more broader set of Unicode characters that are encoded in UTF-8 format, and both byte and rune data types are essentially integers

### Using `Buffer` type in bytes package

[Official Doc](https://golang.org/pkg/bytes/)

- Create a new Buffer type with `NewBuffer([]byte)` or `NewBufferString(string)`. They both returns `*Buffer`

- Useful functions in `Buffer`

    1. `Write([]byte)` : Write []byte to the *Buffer

    2. `WriteString(string)` : Write string to the *Buffer

    3. `Read([]byte)` : Basic reading function

    4. `String()` : String returns the contents of the unread portion of the buffer as a string. If the Buffer is a nil pointer, it returns `nil`
