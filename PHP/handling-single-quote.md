# How to handle single quote PHP + SQL

## Links for solutions

- [Stackoverflow](https://stackoverflow.com/questions/1912095/how-to-insert-a-value-that-contains-an-apostrophe-single-quote)

## Example cases

- I was trying to insert some data to local MySQL for college assignment.

- It ended up getting errors because one of my data was including a single quote(`'`) and PHP could not read SQL query as the way I wanted it to.

## Solution

- I figured out that I can use single quote inside of SQL query as long as I just **escape** the apostrophe by doing **double-up the single quote character**

- So I replaced every `'` to `''` by using built-in PHP function.

```php
function insertData($conn, $table, $country, $lang, $population){
    $country = str_replace("'", "''", $country); // This handles unexpected single quote in country's name
    $query = "INSERT IGNORE INTO ${table}(country, primary_language, population) VALUES ('${country}', '${lang}', ${population})";  
    $result = $conn->query($query);
    if($result)
        echo "Successfully inserted data";
    else
        echo "There was problem while inserting data to table ${table}.".'<br/>'.($conn->error);
}
```
