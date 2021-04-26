# Amazon VPC

## Citation Links

- [Academind: AWS VPC & Subnets | Amazon Web Services BASICS](https://www.youtube.com/watch?v=bGDMeD6kOz0&t=597s)

- [AWS VPC Masterclass Webinar (2018) - Part 1](https://www.youtube.com/watch?v=LX5lHYGFcnA)

- [AWS Essentials: Internet Gateways(IGW)](https://www.youtube.com/watch?v=pAOrBxZ7584)

## Inside of VPC

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F99B007485C5FE87417CB1D)

- There are many availability zones in a single VPC.

- Each availability zone can have many subnets, including its default subnets.

- Two different VPCs are logically separated.

![](https://docs.aws.amazon.com/vpc/latest/peering/images/two-vpcs-to-two-subnets-one-vpc-diagram.png)

*Example of separated VPCs*

## Components of VPC

![](https://www.girishtech.com/wp-content/uploads/2018/10/VPC_Components.png)

### 1. Subnet

### 2. Route Table

### 3. Router

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

### 7. Customer Gateway

-

### VPN Connection

### Virtual Private Gateway

### VPC Peering

### VPC Endpoints

### NAT Gateway
