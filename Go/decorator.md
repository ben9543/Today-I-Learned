# Decorator in Go Lang

## What is Decorator?
- Decorator is one of the computer programing design patterns.

- Component has one Concrete Component and many Decorators.

- Decorators can have many decorators.

- Each Decorator has the interface as a member variable.

## How to write decorators in Go Lang?

1. Create one component interface that has a member value of Operator function

```Go
type Component interface{
    Operator(string)
}
```

2. Create a struct that implements the interface

```Go
var data string = "Ben's Awesome"

type SendComponent struct {}
type ZipComponent struct {
    com Component
}
type EncryptComponent struct {
    com component
    key string
}
```

3. Add Operator function for each struct

```Go
func (self *SendComponent) Operator(data string){
    // Send data
    sendData(data)
}
func (self *ZipComponent) Operator(data string){
    zipData(data)
}
func (self *EncryptComponent) Operator(data string){
    encryptData(self.key, data)
}
```

4. Create nested structs
