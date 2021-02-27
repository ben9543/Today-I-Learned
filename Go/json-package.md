# `encoding/json` package

[go walkthrough](https://www.gobeyond.dev/encoding-json/)

[go official doc](https://golang.org/pkg/encoding/json/)

[jeonghwan-kim blog](https://jeonghwan-kim.github.io/dev/2019/01/18/go-encoding-json.html)

- Although JSON is easy to start using, you can run into some issues. Formats which are easy for humans to read are typically slow for computers to parse.

- Therefore, typically JSON is used when ease-of-use is the primary goal of data interchange and performance is a low priority.

### Encoding

- The json package has two ways to encode values to JSON. First is the **stream-based json.Encoder** which will encode the value to an io.Writer

- The second option is json.Marshal() which will return an in-memory byte slice of your encoded value

- `json.Encoder`

    ```go
    type Encoder struct {}

    func NewEncoder(w io.Writer) *Encoder

    func (enc *Encoder) Encode(v interface{}) error
    ```

- `json.Marshal`

    ```go
    func Marshal(v interface{}) ([]byte, error)
    ```


### type `Decoder`



### type `Delim`
