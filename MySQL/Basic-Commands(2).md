# Basic Commands for Using MySQL (2)

[source]("https://www.youtube.com/watch?v=vgIc4ctNFbc&t=364s")

6. ORDER BY + DESC | ASC(default)

- Basic usage

```SQL
SELECT *
FROM city
ORDER BY Population DESC
```

- Nesting sevral DESC and ASC is possible

```SQL
SELECT *
FROM city
ORDER BY Population DESC, Name ASC, District DESC ... ;
```

7. DISTINCT

- Remove occurrence from the data

```SQL
SELECT DISTICT CountryCode
FROM city;
```

8. LIMIT

- Restricts the number of results.

- Only returns 'N' number of results.

```SQL
SELECT *
FROM city
ORDER BY Population DESC
LIMIT 10;
```

9. GROUP BY

- Normally comes with Aggregate Functions like:
    - AVG
    - MIN
    - MAX
    - COUNT: Number of cols
    - COUNT(DISTINCT): Number of cols without occurrence
    - STDEV
    - VARIANCE

- Basic example

```SQL
SELECT CountryCode, MAX(Population)
FROM city
GROUP BY CountryCode;
```

=> Select every cols with row CountryCode and row Population but group whole data by CountryCode and only shows the one has maximum population.

10. HAVING

- Similar concept with WHERE

- Use when we want to give conditions to `GROUP BY`

```SQL
SELECT CountryCode, MAX(Population)
FROM city
GROUP BY CountryCode;
HAVING MAX(Population) > 8000000
```
