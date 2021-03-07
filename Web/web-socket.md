# Web Socket

## Citation

- [WebSockets - A Conceptual Deep Dive](https://ably.com/topic/websockets)

## What is a WebSocket?

- Created to achieve 'real-time communication on web application'

- HTTP was not enough for the real-time communication since the protocol was designed for request-response mechanism.

-  In 2010, Google Chrome 4 was the first browser to ship full support for WebSockets, with other browser vendors following suit over the course of the next few years, and now all major browsers support WebSockets.

## Go deep inside - so what WebSockets are?

- In a nutshell, WebSockets are a thin transport layer built on top of a device’s TCP/IP stack.

- Therefore, after the basic handshake and specification for message framing, everything will be handled either on a per-application or per-library basis.

- The fact that WebSockets are built on top of the TCP stack suggests all we need is a way for the client and the server to jointly agree to hold the socket connection open and re-purpose it for ongoing communication.

- To begin the process of re-purposing the TCP socket for WebSocket communication, the client can include a standard request header that was invented specifically for this kind of use case:

```bash
GET /index.html HTTP/1.1
Host: www.example.com
Connection: Upgrade
Upgrade: websocket
```
![](https://images.ctfassets.net/ee3ypdtck0rk/1u0ijAerVQdTEvV2RUGcGp/9b0b67b0014254f8af5064f63c4a81a6/websockets.png)

## Steps for using WebSocket with HTTP

1. The Connection header tells the server that the client would like to negotiate a change in the way the socket is being used.

2. The `Upgrade: websocket` indicates that the transport protocol currently in use via TCP should change.

3. Therefore, as soon as the server sees 'websocket' as the value of the `Upgrade` header, it knows that a WebSocket handshake process has begun.

## WebSocket handshake process

1. When initiating an upgrade to a WebSocket connection, the client must include a Sec-WebSocket-Key header with a value unique to that client. Normally this step is handled by browsers. Here’s an example:

```bash
Sec-WebSocket-Key: BOq0IliaPZlnbMHEBYtdjmKIL38=
```

2. When responding, the server must

    1. append the special GUID value 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 to the key,

    2. generate a SHA-1 hash of the resultant string,

    3. include it as the base-64-encoded value of a `Sec-WebSocket-Accept header` that it includes in the response:

    ```bash
    Sec-WebSocket-Accept: 5fXT1W3UfPusBQv/h6c4hnwTJzk=
    ```

    - Node JS Example:

    ```js
    const crypto = require('crypto');

    function generateAcceptValue (acceptKey) {
      return crypto
        .createHash('sha1')
        .update(acceptKey + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11', 'binary')
        .digest('base64');
    }
    ```
3. To complete the handshake, have server socket write the appropriate HTTP response headers to the client socket.

## Subprotocols

- The client and server generally need to agree on a compatible strategy with respect to how they format, interpret and etc, for the messages go back and forth, and this is where **subprotocols** come in.

- **client**: *can send a list of protocols* that it can deal with:

    ```bash
    Sec-WebSocket-Protocol: mqtt, wamp
    ```

- **server**: must *select precisely one protocol* from the list provided by the client:

    ```bash
    Sec-WebSocket-Protocol: wamp
    ```

## Close Socket

- WebSockets don’t automatically recover when connections are terminated – this is something you need to implement yourself, and is part of the reason why there are many client-side libraries in existence.

- While the WebSocket class is straightforward and easy to use, it really is just a basic building block. Support for different subprotocols or additional features such as messaging channels must be implemented separately.
