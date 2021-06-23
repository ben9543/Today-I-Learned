# 4. Wallet

## What is Bitcoin Wallet?

- A software for key management which creates a Bitcoin transaction and store Satoshi tokens.

## SPV

- `SPV` is a lightweight client which only stores the block headers and merkle roots which are the only things needed for verification of a transaction being valid or not.

- Wallet clients typically provide not just key management but also transaction management capabilities.

- `SPV` is simplified payment verification a method which allows a transaction recipient to prove that the sender has control of the source funds of the payment they are offering without downloading the full blockchain.

- [More about SPV](https://wiki.bitcoinsv.io/index.php/Simplified_Payment_Verification)

### Full node vs SPV node

0. Link

- [Full Node vs SPV Node](https://www.massmux.com/bitcoin-full-nodes-vs-spv-nodes/)

1. Full node

- Full nodes keep a **complete copy of all the bitcoin blockchain** with all the transactions.

- A full node independently and authoritatively verifies all the transactions by itself without having any need of external resources.

2. SPV node

- SPV nodes, infact, download the block headers only and **exclude the transactions of each block.**

- SPV nodes have a chain of blocks without transactions and this makes possible to have a resulting data amount stored locally over thousand times lower in size.

- In order to verify a transaction, SPV nodes use the link between the transaction which they are interested in and the block that contains it, using the merkle path.

- To protect the SPV node against the possibility of a double spending attack against the SPV itself, the nodes must connect randomly to other different nodes to have the maximum probability to get correct information.
