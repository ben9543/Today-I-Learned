# Exceptions in Java

[soucre](https://www.javatpoint.com/exception-handling-in-java)

### Hierarchy of Java Exception classes

- `Exception` and `Error` class implements the root class `Throwable`

![](https://static.javatpoint.com/images/throwable.png)

### Types of Java Exceptions

1. Checked Exception:
    - inherit Throwable class except RuntimeException
2. Unchecked Exception:
    - inherit RuntimeException
3. Error:
    - irrecoverable e.g. OutOfMemoryError, VirtualMachineError, AssertionError etc.


### Java exception keywords

- try

- catch

- finally

- throw

- throws

### Creating custom checked exception

```java
public class IncorrectFileNameException extends Exception {
    public IncorrectFileNameException(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }
}

try (Scanner file = new Scanner(new File(fileName))) {
    if (file.hasNextLine())
        return file.nextLine();
} catch (FileNotFoundException e) {
    if (!isCorrectFileName(fileName)) {
        throw new IncorrectFileNameException("Incorrect filename : " + fileName, err);
    }
    //...
}
```
