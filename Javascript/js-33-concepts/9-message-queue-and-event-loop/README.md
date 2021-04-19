# 9. Message Queue and Event Loop

## Citation Link

- [Document Link](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)


## Basic Architecture

1. Heap: Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory

2. Stack: This represents the single thread provided for JavaScript code execution. Function calls form a stack of frames (more on this below)

3. Browser or Web APIs: These are built into your web browser. They are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code.

## Steps with an example

```JavaScript
function main(){
  console.log('A'); // 1

  setTimeout( // 2
    function display(){ console.log('B'); }
  ,0);

	console.log('C'); // 3
}
main();

```


1. The call to the main function is first pushed into the stack( main() ). Then JavaScript reads the main function, and add console.log('A') to the stack after the execution of main(). console.log('A') is popped out from the call stack right away and displays 'A' on the console ( main() is still being executed so it is at the bottom of the call stack )

2. The next statement (setTimeout() with callback exec() and 0ms wait time) is pushed into the call stack and execution starts. setTimeout function `uses a Browser API to delay a callback` to the provided function( console.log('B') ). 'B' is then popped out once the handover to browser is complete (for the timer)

3. console.log('C') is pushed to the call stack `while the timer runs in the browser for the callback to the exec() function.` The callback ( console.log('B') ) will be added to the message queue as soon as the browser receives it.

4. For the browser to push any message from the queue to the call stack, the call stack has to be empty first. To empty the call stack, it needs to execute console.log('C') and main().

5. Then JavaScript add message queued function to the call stack, and tries to execute it( console.log('B') ).

> So setTimeout() function's time does not assure the exact time of the function take. It means it will add the function to the message queue after the specific time
## Deeper understanding

```JavaScript

function main(){
  console.log('A');
  setTimeout(
    function exec(){ console.log('B'); }
  , 0);
  runWhileLoopForNSeconds(3);
  console.log('C');
}
main();
function runWhileLoopForNSeconds(sec){
  let start = Date.now(), now = start;
  while (now - start < (sec*1000)) {
    now = Date.now();

  }
}
```
The main point to remember is that while loop (like many others) is a blocking statement meaning its execution happens on the call stack and does not use the browser APIs. So it blocks all succeeding statements until it finishes execution.

1. Add main(), console.log('A') to the call stack
2. Add setTimeout and it goes to the message queue after 0 seconds
3. Add runWhileLoopForNSeconds to the call stack while the callback ( console.log('B') ) is being added to message queue
4. Since while blocks the execution until the loop is broken, the callback ( console.log('B') ) call back is stuck in the message queue.
5. The while loop keeps on running on the call stack (single thread) until 3s has elapsed.
6.  And after the call stack becomes empty the callback exec() is moved to the call stack and executed.
