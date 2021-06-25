# 6. Transaction Format and Script

## Transaction Format

- A transaction consists of: some Metadata, Inputs and Outputs and follows a strict sequence and definition.

- The number of inputs and Outputs are not really limited by the protocol but **there is a size limit to how big a transaction size can be** (1 MB at this time). In future these limits will be removed as well when nodes are able to process a more versatile set of transactions.

- Among the fields in transaction format, there is `nLockTime`, which is the block number or time after which the transaction will become valid.

## Creating Transactions
