# Network Address Translation(NAT)

## What is NAT?

- NAT solves the problem of how to route non-routable IP addresses.

## How it works?

### 1. Static NAT(SNAT)

- Each private IP address is assigned to a specific routable public IP address.
- Not flexible, scalability issues.

```
192.168.0.2 => 0.0.0.111(Assigned)
192.168.0.3 => 0.0.0.112(Assigned)
192.168.0.4 => 0.0.0.113(Assigned)
...
```

### 2. Dynamic NAT(DNAT)

- Router dynamically assigns a routable IP address to devices from a pool of available public IP addresses.
- First come, first serves
- More flexibility than SNAT, but still had some scalability issues.
```
# Most available one comes first
192.168.0.2 => 0.0.0.0(Assigned)
192.168.0.3 => 0.0.0.1(Assigned)
192.168.0.4 => 0.0.0.1(The most available pub IP assigned)
192.168.0.5 => 0.0.0.0(The most available pub IP assigned)
...
```

### 3. Port address translation(PAT)

- PAT is a type of DNAT that was developed to increase the scalability of NAT.
```
# Only one public IP is needed
192.168.0.2 => 1.1.1.2:1(Assigned)
192.168.0.3 => 1.1.1.2:2(Assigned)
192.168.0.4 => 1.1.1.2:3(Assigned)
192.168.0.5 => 1.1.1.2:4(Assigned)
...
```
