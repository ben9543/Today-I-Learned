# Transaction

## What is Ethereum Transaction?

- Interacting with Ethereum Blockchain means executing transactions that update the blockchain state.

- The term "transaction" is used in Ethereum to refer to signed data package that stores a message t be sent from an EOA to another account on Blockchain

- Requires a gas fee

- An EOA produces a transaction and a contract produces a message.

## Life Cycle of an Ethereum Transaction

1. Client constructs the raw transaction object.

2. Client signs the transaction with the private key.

3. The transcation broadcasted to the network by the Ethereum Client(such as Geth) and the transaction ID is returned.

4. The transaction is added to the transaction pool and waits there to be validated by the miner. A minder node accepts the transaction.

    * *Notice: Ethereum Network has a mix of miner nodes and non-mider nodes.

    * There are lots of transactions that are waiting in the transaction pool to be added to the next block by miners.

5. Miner finds a valid block by solving the `PoW puzzle` (or `PoS`)  and adds the new block the existing blockchain. The number of transactions in the block depends on the block gas limit.

6. The miner node broadcasts the new block to all other nodes. All nodes execute the transactions from the new block, but only the miner gets paid.

## Ethereum Parameters

- Ethereum 1.0: Can process 15 transactions per second

- Ethereum 2.0: Can process 100,000 transactions per second

- Ethereum Block time is 20 seconds.
