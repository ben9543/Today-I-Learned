# SSH Tunneling

## Useful Links

- [How to Set up an SSH Server on a Home Computer](https://dev.to/zduey/how-to-set-up-an-ssh-server-on-a-home-computer)

- [Video: SSH Tunneling Explained](https://www.youtube.com/watch?v=AtuAdk4MwWw&t=188s)

## Why do we need SSH Tunneling?

- We can forward connection to different port number when mine is blocked

- Simple Port Forwarding

 ```text
 ssh -L(local port) | 8181(New port I want to use) | xxx.xxx.xxx.xxx:8080 (Remote network's IP and port number that I want to connect)| ben@172.25.139.119(ssh server credential)
 ```

- Dynamic Port Forwarding

    * Setting up proxy server in your Windows will send every incoming traffic to your custom port to ssh tunnel and retrieve data

    ```text
    ssh -D(dynamic) | 8080(custom port number) | ben@172.25.139.119(ssh server credential)
    ```

- Reverse Tunneling

    *  Let's say we are connecting to work desktop from home

    ```text
    ssh -R(remote port forwarding) | 8181(custom port number of home) | :localhost(Network IP in this case localhost) | :8080(Work port number which an app is running) | ben@172.25.139.119 (SSH server credential of Home network)
    ```

    * In your home network, make sure to allow `AllowTcpForwarding` and `GatewayPorts` in `sshd.confg`
