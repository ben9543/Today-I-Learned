# 8. Cookies and sessions

## Basic Ideas

- Cookies and Sessions are basically for storing some data in client side.

## Cookies

- Cookies are small pieces of data stored as text on the client's computer

- Types of cookies

    1. Temporary: Get removed once the client close the browser

    2. Persistent: Remains on the system in a text files for a specified period of time.

- The saved cookies are sent from the client to the server.

- Cookies are not deleted, they automatically expire. To force
a cookies to get deleted, subtract any number of seconds from the expire augment.

- **Never** store unencrypted passwords or sensitive data in cookies.

- Setting cookies in PHP

```php
setcookie("Name", "", time()−3600);
setcookie("Birthdate", "", time()−3600);
```

- Check if cookies are enabled in PHP

```php
if count($_COOKIE) > 0)
    // ... Your code
```

## Session

- Sessions allow the PHP script to store data on the web server that can be later used, even between requests to different PHP pages.

- Sessions are very useful to protect the data that the user wouldn't be able to read or write.

- Start session with `session_start()` function

- End session with `session_destroy()` function
