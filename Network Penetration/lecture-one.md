# Lecture One

## Basic Commands

- `arp -a`: Mapped MAC address

- `route`: Routing table

- `history`: All the commands typed recently

## Impacket Tools

1. Delete Kali version of impacket(apparently it is broken)

```bash
apt-get purge *impacket*
```

2. Clone the repository

```bash
cd /opt/ # Recommended file directory
git clone https://github.com/SecureAuthCorp/impacket.git
pip install . # If there is no pip installed, do apt install python3-pip
```

## Systemctl vs service

- [Stackoverflow Link](https://stackoverflow.com/questions/43537851/difference-between-systemctl-and-service-command#:~:text=service%20operates%20on%20the%20files,file%20in%20%2Fetc%2Finit.)

- Service operates on the files in /etc/init. d and was used in conjunction with the old init system. systemctl operates on the files in /lib/systemd . If there is a file for your service in /lib/systemd it will use that first and if not it will fall back to the file in /etc/init.

## ping

- Basic Usage:

    ```bash
    ping -c 1 192.168.125.233
    ```

## cut

- Basic usage

    ```bash
    cat ip.txt | grep "64 bytes" | cut -d " " -f 4
    ```

- `-d` option: Give a delimiter

- `-f` option: Select nth field

## tr

- Basic Usage

    ```bash
    tr -d ":" # Remove :
    ```
