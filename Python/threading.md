![](https://www.python.org/static/community_logos/python-logo.png)

# Threading in Python

## Links

- [Python Threading Tutorial: Run Code Concurrently Using the Threading Module](https://www.youtube.com/watch?v=IEEhzQoKtQU)

## Threading in Python is easier than in other languages!

### 1. Basic threading

1. import `threading` module

2. Create threads with target function

```python
t1 = threading.Thread(target=do_something)
t2 = threading.Thread(target=do_something)
```

3. Run threads

```python
t1.start()
t2.start()
```

### 2. With `join` method

```python
t1.start()
t2.start()

t1.join()
t2.join()

print("Done")
```

- `join()` basically locks the program until those currently running threads are done.

- If there was no `join` then the program would print out "Done" before the threads finish running their target functions.
