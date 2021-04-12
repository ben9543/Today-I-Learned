# DHCP

## What does it do?

- Basically assign private IP Address 'dynamically' to the connected device.

- Assigning IP addresses manually to each device would require load of work.

## Properties

- DHCP IP addresses are typically only allocated for specific period of time.

## Steps of DHCP

1. Discover: First, DHCP client of a device will send a broadcast using 255.255.255.255 to find if there is any DHCP server out there.

2. Offer: Next, DHCP server offers an IP address. Notice that this is just an offering since there may be many DHCP servers in the network.

3. Request: Then DHCP client will request the IP address from the server. If there are more than two DHCP servers that offer IP address, then DHCP client will pick one among them, typically the first one that offers the IP address.

4. Acknowledge: Then DHCP server will acknowledge the request.
