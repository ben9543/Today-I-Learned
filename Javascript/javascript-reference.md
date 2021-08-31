# JavaScript Reference

```js
const socket = new WebSocket(`ws://${window.location.host}`);
const chatForm1 = document.getElementById("chat-form");
const chatForm2 = document.getElementById("chat-form");
const fn1 = (e) => {
    e.preventDefault();
    let input = chatForm1.querySelector("input").value;
    socket.send(`Client: ${input}`);
    input = "";
}
const fn2 = (e) => {
    e.preventDefault();
    let input = chatForm2.querySelector("input");
    socket.send(`Client: ${input.value}`);
    input.value = "";
}
chatForm1.addEventListener("submit", fn1);
chatForm2.addEventListener("submit", fn2);
```

- chatForm1 will not refresh the form.
- chatForm2 will refresh the form.
