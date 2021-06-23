# CH1. Final Questions

## 1. What can a Bitcoin Transaction be used for?

- Storing data

- Transferring money/value

## 2. What kind of system Bitcoin uses to store user funds/coins?

- UTXO which are **independently** owned using Private keys.

## 3. Is Bitcoin Address same as the Public key?

- No, they are derived from Public Key

## 4. What is the use of nSequence field in transactions?

- It is used to determine **finality of a transaction.**

## 5. What is the use of nLocktime in bitcoin transactions?

- It is used to identify the block height or the unix time when transaction will become valid to be accepted in a block.


## 6. How is a typical transaction fee for a bitcoin transaction calculated?

- Depends on the **transaction size** in bytes

## 7. Bitcoin Script is

- A predicate which always returns Success or Failure of processing.

## 8. Bitcoin Script can perform recursive/loops computation

- Yes, but not natively, you can use two stacks present to unroll the loop and perform computation.

## 9. In theory and by design, data up to 4GB can be posted on bitcoin along with a single transaction. This statement is?

- True

# 10. Which of the following is not one of the API provided by Whatsonchain explorer?

- Build Raw transaction


## 11. When bitcoin ledger is used as a data store or database, what are its limitations? (one correct selection necessary to proceed)

- It is limited by the money a user has to store new transactions as it requires a small fee amount to be paid to transaction processors.

- It is limited by the validity of the transaction create by the user which has to follow a certain transaction format.

- It is limited by the storage space by an individual transaction processor for him but still allows for other transaction processors to continue to keep it updating as long as they have infrastructure to support new transactions.


## 12. What are the properties of Bitcoin working as a “Tape” abstraction? (one correct selection necessary to proceed)

- The tape moves one direction: forward.

- Tape is for keeping track of work accomplished. Work may happen on-tape or off-tape.

- Work is publicly published, which allows anyone to easily verify the work themselves.

## 13. What is a halting problem?

- It is the problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running, or continue to run forever.

## 14. ECDSA is a form of digital signature which is:

- Secured using random private key, elliptic curves over finite fields and hash functions

## 15. What is Bitcoin? (one correct selection necessary to proceed)

- A Peer to Peer electronic cash system.

- A protocol which could enable micropayments using a peer node network.
