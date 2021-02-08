# GNUBoard Cheat Sheet

## Fetch

- Fetching only one row =>
`sql_fetch($query)`

- Fetching multiple rows =>
```php
<?php
$query = "...";
$result = sql_query($query);
while($col = sql_fetch_array($result)){
    // Do whatever you wanna do with $row
}
?>
```
