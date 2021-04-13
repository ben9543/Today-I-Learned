# Gas system in Ethereum

## What is Gas?

- Gas measures how much work a transaction's code does.

- Any transaction that modifies the blockchain in any way costs gas. Any basic operation or data storage costs gas.

    * For Example

        - Create a new contract: 32000 Gas required

        - Save 1MB to storage: 625000000 Gas required

        - Send 1 transaction: 21000 Gas required

        - etc ...

        - Literally *every* transaction needs gas

        - Notice that saving bulk data to the blockchain network costs insanely a lot. We typically use IPFS(InterPlanetary File System)

- Gas fee secures the Ethereum network because it prevents hacker having them to pay for each basic operation.

- If you pay less than the estimated gas price, your new transaction won't be mined or included in a new block, because the miners will sort and select the transactions that are waiting to be mined by their gas price.

- The amount of time that it takes to get the transaction mined depends on the gas price.

## GasPrice & GasLimit

- For any transaction there are 2 variables: **GasPrice** and **GasLimit**

### GasPrice

- [Check ETH Gas Price](https://ethgasstation.info/)

- The amount of gas needed to invoke transactions on the Ethereum blockchain network.

- `wei` is the smallest denomination of ether, the cryptocurrency coin used on the Ethereum network. 1 ether = 1,000,000,000,000,000,000 `wei`

- 1 ether = 1,000,000,000 `gwei`

### GasLimit

- The maximum gas the transaction can consume. This avoids DoS attacks by setting the maximum no. of computation steps of code execution.
