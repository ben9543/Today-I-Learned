#1. The Bitcoin Protocol

## What is the Bitcoin protocol?

- The **Bitcoin protocol** is a special set of rules implemented using an economic model cryptographic tools to create a system which solves **two major issues** in electronic payment systems which are:

    1. Double Spending

        - Previously the most significant obstacle in creating an electronic cash system.
        - The centralized mechanisms were introduced to prevent double spending, since the only way to confirm spending the same coins twice is **to be aware of all transactions,** and it is easier when there is a centralized system that monitors every transactions.
        - But trusting the system gives us another dilemma that if the system itself is trustworthy or not.
        - To resolve the issue without a trusted party, **transactions are publicly announced in Bitcoin network.**
        - The network follows something called the `first seen rule`. The rule means that the first transaction seen spending coins is considered by the network as the legitimate transaction.
        - This works in conjunction with `UTXO(unspent transaction output)`

    2. Byzantine Generals Problem(BFT)

        - `BFT`: How can individual parties find a way to guarantee full consensus?
        - Solving `BFT` can be done by using a `Proof of Work` system.
        - `Proof of Work` simply means to use CPU to cycle through combinations of `nonce` and `block header`

            1. All nodes that running the Bitcoin network will compete to solve a mathematical problem or a "computation puzzle."

            2. The reward they get is a set of new coins to be introduced in the system and the transaction fees from the transactions they commit to the ledger.

            3. Therefore, nodes **make money only if they act honestly,** and **lose money if they are dishonest** due to the extensive computation involved requiring spending energy.

## Bitcoin vs Traditional credit-card-based payment

- Rather than relying on other multiple third parties, we have only on third-party which is played by a number of competing nodes that makes a transaction reaches to the intended recipient without numerous steps.

- A sender(typically a customer) only has to send the transaction via his software to the node network to update on the Bitcoin ledger, which simplifies business process and removes the reversibility of the transaction.

- Instead of account numbers and passwords and etc, all coins are associated with a private/public key pair which makes transactions extremely secure.
