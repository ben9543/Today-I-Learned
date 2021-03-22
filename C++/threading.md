# Threading in C++

## Citation Links

- [Youtube Bo Qian - C++ Threading #1](https://www.youtube.com/watch?v=LL8wkskDlbs)

- [Youtube Bo Qian - C++ Threading #2](https://www.youtube.com/watch?v=f2nMqNj7vxE)

- [Youtube Bo Qian - C++ Threading #3](https://www.youtube.com/watch?v=3ZxZPeXPaM4)

- [Youtube Bo Qian - C++ Threading #4](https://www.youtube.com/watch?v=_N0B5ua7oN8)

## 1. Introduction

### Process vs Threads

- Multiprocessing: Each process have only one thread running. Then each process communicate with built-in 'Interprocess Communication Cannel'

- Multithreading: One process have multiple threads inside, and each thread communicate through 'Shared Memory'

    * Pros and Cons of Multithreading:

        - Pros

            1. Fast

            2. Low overhead

        - Cons

            1. Difficult to implement: Needs to be carefully handled.

            2. Can't run on distributed system

### Example

```cpp

#include <iostream>
#include <thread>

void function_1(){
    std::cout << "Beauty is only skin-deep" << std::endl;
}

int main()
{

    std::thread t1(function_1); // t1 starts running
    // t1.join(); // main thread waits for t1 to finish
    t1.detach(); // t1 will freely on its own -- daemon process

    return 0;
}

```

- If you `join` then message will be displayed, because the main thread will wait until the function executes

- If you `detach` then now the thread works freely on its own, and the message will not be displayed  because the main thread ends so fast even before the thread does what is supposed to do.

- So when you are running program concurrently, `then you cannot tell which thread will run faster unless you put some synchronization mechanism`

- You can only either detach or join the thread once.


## 2. Thread Management

- We need to make the thread either `join` or `detach` before the thread goes away.

    ```cpp

    void function_1(){
        std::cout << "From thread" << std::endl;
    }
    int main() {
        std::thread t1(function_1); // t1 starts running
        try{
            for (int i = 0; i < 100; i++)
                std::cout << "From main " << i << std::endl;
        }catch(...){
            t1.join();
            throw;
        }

        t1.join();
        return 0;
    }
    ```

- Passing Class to the thread is also possible. Here is a simple class with operator()

    ```cpp

    class Fctor{
    public:
        void operator()() {
            for (int i = 0; i > -100; i--)
                std::cout << "from t1 " << i << std::endl;
        }
    };

    int main() {
        std::thread t1( (Fctor()) ); // t1 starts running
        try{
            for (int i = 0; i < 100; i++)
                std::cout << "From main " << i << std::endl;
        }catch(...){
            t1.join();
            throw;
        }

        t1.join();
        return 0;
    }
    ```

    * We are wrapping Fctor class with parenthesis to pass the class directly into the function.

- Memory sharing: We can share same memory(data) from one thread to another.

    ```cpp
        class Fctor{
        public:
            void operator()(string& msg) {
                std::cout << "t1 says: " << msg << endl;
                msg = "Trust is the mother of deceit.";
            }
        };

        int main() {
            string s = "Where there is no trust, there is no love.";
            std::thread t1( (Fctor()), std::ref(s) ); // t1 starts running + passing s reference

            t1.join();

            std::cout << "From main: " << s << std::endl;
            return 0;
        }
    ```

    * We can see that the data 's' has changed while t1 thread was running.

- We can move a thread to another using `std::move()`;

    ```cpp
    std::thread t1();
    std::thread t2(std::move(t1)); // The thread moved.
    ```
- Each thread has a special ID. We can check it by `std::this_thread::get_id()` and `std::thread.get_id()`

- How many thread do I need to create? => As many as the problem numbers that I need to solve. => If assigned too many threads, then it is end up getting too many context switching and wasting cpu memory. This is called `oversubscription`

- `std::thread::hardware_concurrency()` gives us the number of threads that my computer's cpu can run.


## 3. Data Race and Mutex
