# Iptables in Linux

## Understanding the concept of iptables

### 1. Tables

- Filter table

    * Default table

    * It filters the packets(whether accept them or not)

- Network Address Translation(NAT) table

    * Modifies the packet's source or destination addresses to route the packet in NAT setup, where direct access is unable.

- Mangle table

    * Alters IP headers of the packet.

- Raw table

- Security table

### 2. Chains

- Chains are like points in the route of packet where you can apply rules

- There are five chains in IP tables

    1. Pre Routing: Applied to any incoming packet very soon after entering network stack(before taking any routing decisions).

    2. Input: Post pre routing when packet enters the system.

    3. Forward: Applied to a packet that is forwarded through your system.

    4. Output: Applied to a packet originated from your system(going out packets)

    5. Post Routing: Opposite of pre routing. Applied to outgoing & forwarded traffic, after routing decision has taken place, just before packet is being put on the wire.

- Traversal Order

    1. Incoming packets destined for the local system: `PREROUTING` => `INPUT`

    2. Incoming packets destined to another host: `PREROUTING` => `FORWARD` => `POSTROUTING`

    3. Locally generated packet: `OUTPUT` => `POSTROUTING`

- Not all chains are available for all tables.

- Filter table has `2. Input`, `3. Forward`, and `4. Output`

### 3. Rules

- Commands to manipulate network traffic.

- Each rule has two components which are `1. Matching Component`, `2. Target Component`

## Command Syntax

### Basic syntax

- `iptables -L -n -v`: Prints the IP table. `-L` for listing, `-n` for numeric values and `-v` for verbose. It gives default table(filter table) information when you don't specify the table name(use `-t`).

- Basic Form

    ```bash
    iptables -t [table] -OPTIONS [chain] [matching component] [action component]
    ```

    * table: Where you specify the table name.

    * chain: Where you provide chain options(Uppercase).

        - A: Append

        - D: Delete

        - I: Insert

        - Z: Zero packet counters

        - L: List

        - P: Policy

        - E: Rename

    * matching component: If the given condition is true, take the action, else move to the next rule in the chain.

        - Generic

            - p: Protocol

            - s: Source IP

            - d: Destination IP

            - i: IN interface

            - o: OUT interface

        - Implicit

            - `-sport`

            - `-dport`

            - `--tcp-flags`

        - Explicit

    * action component

        - It fires when the matching component is true

        - `-j`: ACCEPT | DROP | REJECT | RETURN
