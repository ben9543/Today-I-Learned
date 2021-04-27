# Amazon VPC

## Citation Links

- [Academind: AWS VPC & Subnets | Amazon Web Services BASICS](https://www.youtube.com/watch?v=bGDMeD6kOz0&t=597s)

- [AWS VPC Masterclass Webinar (2018) - Part 1](https://www.youtube.com/watch?v=LX5lHYGFcnA)

- [AWS Essentials: Internet Gateways(IGW)](https://www.youtube.com/watch?v=pAOrBxZ7584)

## Key Points

- VPCs are limited to a region but stretch across AZs.

- Subnets can be Private or Public and are limited to a single AZ.

- Subnets must be associated with Route Tables.

- An Internet Gateway route must be address in the Route Table for the internet inbound/outbound

## Inside of VPC

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F99B007485C5FE87417CB1D)

- There are many availability zones in a single VPC.

- Each availability zone can have many subnets, including its default subnets.

- Two different VPCs are logically separated.

![](https://docs.aws.amazon.com/vpc/latest/peering/images/two-vpcs-to-two-subnets-one-vpc-diagram.png)

*Example of separated VPCs*

## Components of VPC

![](https://www.girishtech.com/wp-content/uploads/2018/10/VPC_Components.png)


### 0. Reserved IP Addresses in AWS VPC

- 10.0.0.0: Network portion

- 10.0.0.255: Broadcast IP

- 10.0.0.1: VPC Router

- 10.0.0.2: Internal DNS service

- 10.0.0.3: For future use

### 1. Subnet

- Whenever you are creating a subnet, make sure it is a part of your main network.

- Example

    * VPC: `10.0.0.1/16`, Subnet: `10.0.1.15/24` => ✅

    * VPC: `10.0.0.1/16`, Subnet: `10.2.0.14/24` => ❌

### 2. Route Table && 3. Router

- When one EC2 wants to communicate with the other:

    1. A sends request through the router.

    2. According to the route table, any IP address under `10.0.0.0/16` will be considered as **local**

    3. If the requested IP address's network portion is not under `10.0.0.0/16`, then the router will forward the packet to IGW

- Public & Private Routing table

    * We can separate the routing table into public and private

    * If the subnet communicate with the Public Routing table, that it becomes a `Public Subnet`

    * If the subnet communicate with the Private Routing table, that it becomes a `Private Subnet`

### 4. Elastic IP

- Simply a **static public IP address**

- Whenever we create a EC2 Instance inside of a subnet, the instance will get a **dynamic IP address** to use, but it is not permanent(If you reboot the system, the IP address might change).

- So we use Elastic IP to assign permanent, static IP address.

### 5. Elastic Network Interface(ENI)

- Works together with Elastic IP.

- Whenever you try to assign an Elastic IP to your EC2, it does not get assigned to the actual EC2 machine, but ENI. Then ENI gets assigned to EC2 instance.

- It does the job of a **Network Card** for EC2

- The advantage of using Elastic IP is that you can assign ENI to other EC2 instance when one is down.

### 6. Internet Gateway

- A gateway that allows you to connect to the internet.

- It has attached its own unique ID and VPC ID where it is attached.

### 7. Customer Gateway & VPN Connection & Virtual Private Gateway

### 8. VPC Peering

- Connecting two VPCs

### 9. VPC Endpoints

- Private connections between AWS services

- Example

    * In the past, we had to access S3 go out of the VPC, and pass the internet. Therefore, S3 had to have its public IP

    * But with VPC Endpoints, we don't have to go out of VPC when we are accessing to other AWS services

### 10. Network Address Translation (NAT) Gateway

- NAT Gateway enables instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection to those instances.

- So it is used when private subnets want to communicate with the internet.

- Example Steps

    1. Private subnet B will forward its request to Router.

    2. In private route table, `0.0.0.0/0` is mapped with NAT Gateway.

    3. Then Router will forward traffic to `NAT Gateway` in public subnet.

    4. The traffic will be forwarded out to the internet by NAT configuration of AWS through Router.
