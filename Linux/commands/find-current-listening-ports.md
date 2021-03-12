# Find Current Listening Ports

[soucre](https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-command/)

### 1. netstat

- `netstat -npl | grep LISTEN`

### 2. lsof

- `lsof -i -P -n | grep LISTEN`

- `lsof -i:80>` => gives all connection associated with port 80

### 3. nmap

- `sudo nmap -sT -O localhost` => list open TCP

- `sudo nmap -sU -O localhost` => list open UDP
