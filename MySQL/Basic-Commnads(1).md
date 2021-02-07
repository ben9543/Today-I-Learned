# Basic Commands for Using MySQL

[source]("https://www.youtube.com/watch?v=vgIc4ctNFbc&t=364s")

1. SELECT * FROM ...

- Get every data from current database

2. WHERE

- Conditional statement

3. BETWEEN ... AND (when the data is number)

```SQL
SELECT *
FROM city
WHERE Population BETWEEN 10000 AND 20000;
```

4. IN()

```SQL
SELECT *
FROM city
WHERE Name IN('Tokyo', 'Seoul');
```

5. Sub Query

- Nested query

```SQL
SELECT *
FROM city
WHERE CountryCode = (   SELECT CountryCode
                        FROM city
                        WHERE Name = 'Seoul'  );
```

- Using ANY | SOME: If the nest query statement returns more than one data, then it would cause an error. Using ANY will accept multiple data and will execute the outer query statement for each of them.

```SQL
SELECT *
FROM city
WHERE Population > ANY (   SELECT Population
                            FROM city
                            WHERE District = 'Seoul'   );
-- There are lots of districts that are in Seoul.
-- Since we put ANY, the outer query will return the population that anything bigger than any of population that we got from the inner query.
```

- Using ALL: Returns

```SQL
SELECT *
FROM city
WHERE Population > ALL (   SELECT Population
                            FROM city
                            WHERE District = 'Seoul'   );
-- Since we put ALL, the outer query will return the population that only bigger than inner query's highest value.
```
