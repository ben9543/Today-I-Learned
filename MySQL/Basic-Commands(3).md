# Basic Commands for Using MySQL (3)

[source]("https://www.youtube.com/watch?v=vgIc4ctNFbc&t=364s")

11. ROLLUP

- `ROLLUP` is an extension of the `GROUP BY` clause.

- It allows you to include extra rows that represent the subtotals


12. JOIN

- Combines multiple tables into one.

- The conditional statement follows after `ON` implies how to merge those two tables.

- Example of combining city table and country table

```SQL
SELECT *
FROM city
JOIN country ON city.CountryCode = country.Code;
```
- Example of combining girl group table and song table

```SQL
SELECT gg._id, gg.name, s.title
FROM girl_group AS gg
JOIN song AS s
ON s._id = gg.hit_song_id;
```

[More Resources](https://futurists.tistory.com/17)
