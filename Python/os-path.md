# os and path module

## 1. To get an absolute path

```py
import os
os.path.abspath(os.getcwd())
```

## 2. To check if the directory & file exists in the path

- Use `os.path.isdir()` & `os.path.isfile()`

```py
import os
PARENT_DIR = "/some-path/more-path"
FILE_PATH = "/some-file-path/more-file-path"
if not os.path.isdir(PARENT_DIR_PATH):
    os.makedirs(PARENT_DIR_PATH) # Creates folders recursively
if os.path.isfile(FILE_PATH):
    print("File exists")
```
