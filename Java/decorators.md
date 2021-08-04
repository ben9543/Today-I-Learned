# Decorators in Java (with examples)

## What is decorator?

- Decorator is one of programming design patterns.

- Decorator allows you to modify an object dynamically. (More flexible than inheritance)

- You would use it when you want the capabilities of inheritance with subclasses, but you need to add functionality at run time.

- Rather than rewrite old code you can extend with new code.

## Examples

- Let's say we implement Pizza class to create ThreeCheesePizza class.

- But in the below examples, return values for `getDescription()` and `getCost()` are fixed while we want them to be dynamic.

```java
public abstract class Pizza {

	public abstract void setDescription(String newDescription);

	public abstract String getDescription();

	public abstract double getCost();
}

```

```java
public class ThreeCheesePizza extends Pizza{

	@Override
	public void setDescription(String newDescription) {
		// TODO Auto-generated method stub

	}

	@Override
	public String getDescription() {
		// TODO Auto-generated method stub
		return "Mozzarella, Fontina, Parmesan, Cheese Pizza";
	}

	@Override
	public double getCost() {
		// TODO Auto-generated method stub
		return 10.00;
	}

}

```

## Creating a decorator class

0. Decorator classes have to be `abstract`.

1. Decorator class has a protected variable of the class which it implements
