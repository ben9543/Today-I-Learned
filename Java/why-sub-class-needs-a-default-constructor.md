# Why sub classes need a default constructor?

[Stackoverflow Link](https://stackoverflow.com/questions/9370520/subclass-constructors-why-must-the-default-constructor-exist-for-subclass-cons)

#### Reasons

- The important point is to understand that `the first line of any constructor is to call the super constructor.`

- The compiler makes the code shorter by inserting super() under the covers, `if the developer do not invoke a super constructor him/herself.`


#### Examples

- Example without any constructor

```java
public class Apple extends Fruit {
}
 
class Fruit {
  public Fruit(String name) {
    System.out.println("Fruit's constructor is invoked"); // => Error
  }
}
```

- Example with a constructor but not with the default constructor

```java
static class Human{
    public Human(String name){
        System.out.println("Human constructor(String)");
    }
}
static class Person extends Human{
    protected String name;
    public Person(){
        System.out.println("I'm a person"); // => Error
    }
}
```
