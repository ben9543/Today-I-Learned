# Abstract Class

#### Can abstract class have a constructor in Java?

- Abstract class can have constructors inside, and they can be accessed by calling super() in subclasses.

- One of the reasons which make sense is  when any class extends an abstract class, the constructor of sub class will invoke the constructor of super class either implicitly or explicitly. This chaining of constructors is one of the reasons abstract class can have constructors in Java.

- Again, it is important to know that the default constructors in all inherited class will be automatically created and called if there is no specific mentioning about super and default class.

#### Difference between inheritance and abstract class
