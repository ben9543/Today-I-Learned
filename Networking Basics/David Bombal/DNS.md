# DNS

## What is DNS?

- DNS stands for Domain Name System.

- Resolves domain names to IP Addresses.

- Default port number for DNS server is `53`

## Hostfile

- You can create your own version of DNS locally by editing your hostfile.

- On the Internet we have distributed DNS system.

- We can check DNS server IP address by `ipconfig /all`

## Example with Wireshark captures

- DNS server IP address of my Windows PC

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/networking/dns-1.PNG)

- Wireshark capture when I pinged `google.com`

    ![](https://git-static.s3.ap-northeast-2.amazonaws.com/networking/dns-2.PNG)

    * We can see that Windows PC(`192.168.0.3`) is asking for `google.com`'s IP address to DNS server(`219.250.36.130`). The `source port` number would be randomly chosen port number between Dynamic and/or Private Ports(49152-65535). The `destination port` number would be always 53.

    * Once the DNS server finishes resolving the domain name and finds out the IP address of `google.com`, it sends the IP address back to my Windows PC(`192.168.0.3`).
