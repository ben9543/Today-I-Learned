# 9. SQL

## 0. Relational Database

### Terms

- `table`: For each group of comparable data, we create a table. This table is specially designed to suit this type of data. Table necessarily has `primary key` and `columns`. We need to specify a `column type` for each `column`.

- `entities`: The logical relationship between two or more records.

- `row`: A single line of actual data that fits into its entity's rule.

- `records` : A combination of one or multiple rows identifying a unique object and sharing the same first column

- `attributes | fields`: Data in each row

- `primary key`: A database specific technical identifier which is used to link the entities from a table to another.

### Table Relationships(`foreign key`)

- Relationship can exist between the tables.

- A `foreign key` is a technical id which is equal to one of the primary keys stored in another table.

- `One to one`: When a related table contains exactly one record for each record in the primary table between two tables.

- `One to many`: When one record in a primary table has many
related records in a related table.

- `Many to many`: When many records in one table are related to many records in another table.

- `Normalization`: Breaking tables into multiple related tables to reduce redundant and duplicate information.

> **One to one relationship**: just merge the two tables.

> **One to many relationship**: create a foreign key from an entity table to the other

> **Many to many relationship**: create a junction table

## 1. MySQL

## What is `SQL`?

- `SQL` stands for **S**tructured **Q**uery **L**anguage

### Advantages

- One of the fastest databases available.

- Useful for both small as well as large databases containing billions of records and terabytes of data in hundreds of thousands of tables.

- Great supports from many dev communities

### Creating Tables

- MySQL reads your command as just one command, not a series.

- `CREATE TABLE table_name`: Creates a table

- `SELECT * from table_name`: Retrieve all data from the table

- `INSERT INTO table_name`: Add row to the table records.

- `DROP TABLE table_name;`: Delete the table

- `SHOW TABLES`: Show all tables in the current database

- `DESCRIBE table_name`: Show all entities of the table

    - `DESC` is an alternative for the syntax.

    - `EXPLAIN table_name`, `SHOW FIELDS FROM table_name` and `SHOW COLUMNS FROM table_name` are all alternatives.

- `INSERT` vs `INSERT INTO`: `INSERT INTO` is standard, but completely optional. In MySQL, it is optional, but for compatibility, it is a good practice to do `INTO`

    - [Stackoverflow: insert vs insert into](https://stackoverflow.com/questions/233919/insert-vs-insert-into)

### Browsing the database

- WHERE

```sql
SHOW DATABASES WHERE conditions;
```

- LIKE (% is a wildcard in MySQL)

```sql
SHOW DATABASES LIKE 'my%';
```

### More about SELECT 
