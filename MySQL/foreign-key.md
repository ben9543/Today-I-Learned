# Foreign Key

## Links

- [W3Schools](https://www.w3schools.com/sql/sql_foreignkey.asp)

## Syntax

### `FOREIGN KEY (**ID_ONE**) REFERENCES TABLE_NAME(**ID_TWO**);`

- `ID_ONE`: Current table's field that you want to use as a foriegn key.

- `TABLE_NAME`: The table that you want to reference your foreign key. 

- `ID_TWO`: The id field of `TABLE_NAME`.


### Adding foreign keys when creating a table

```sql
CREATE TABLE item(
    id INT NOT NULL,
    PersonID INT NOT NULL,
    FOREIGN KEY (PersonID) REFERENCES Persons(id)
);
```

### Adding foreign keys after tables created

```sql
ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(id);
```

## Things to keep in mind

### 1. Foreign key and Primary key have to be the same type

- Foreign keys have to be the **same type** with the Primary key that you are referencing to.

- The following SQL code will end up causing errors because the `id` in `Book` and `bookID` in `AuthorToBook` are having different var-types.

```sql
CREATE TABLE Author(
    id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    ...
);
CREATE TABLE Book(
    id INT(6) PRIMARY KEY AUTO_INCREMENT,
    ...
);
CREATE TABLE AuthorToBook(
    authorID INT(11) UNSIGNED NOT NULL,
    bookID INT(11) UNSIGNED NOT NULL,
    FOREIGN KEY (authorID) REFERENCES Author(id), -- OK
    FOREIGN KEY (bookID) REFERENCES Book(id) -- ERROR: different types
    ...
);
```