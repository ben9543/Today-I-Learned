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
