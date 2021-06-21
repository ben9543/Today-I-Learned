# 2. Bit and Coin: Key Concepts

## Coin

### 1. More about transactions

- An electronic coin is defined as **a chain of digital signatures** and an owner transfers the coin to the new owner by a `transaction`.
- A transaction consists of an input record(owner digitally signing the hash of the previous transaction) and the public key for the next owner(recipient).
- A signature is made of the previous transaction owner's private key. Payee or recipient of a transaction can always verify the validity of the transaction by using his private key to validate the transfer of ownership via this transaction as shown above.

| Transaction |
| ------------|
| Owner 2's public key |
| Hash created by previous transaction |
| Owner 1's signature (hashed with Hash + Owner 1's private key) |

### 2. Unspent Transaction Output (UTXO)

- When a sender transfers coin, a Bitcoin transaction system will create two outputs, first, which goes to recipient, and second, the remained coins which belong to sender. The input of the transaction will be the whole coins that the sender has.
- All `UTXO` at a given time can be collected into a set, called the `UTXO set` and this set **represents the current state of ownership of all Bitcoin** in existence at any point in time.
- Every node who has validated the history of the Bitcoin ledger up to a particular block **should have an identical `UTXO` set.**
- UTXO themselves are not the coins but are analogous to *envelopes* which store the real electronic unit or tokens of value in this system, called a `Satoshi`.

### 3. Cryptography system

- It involves Private and Public Key pairs.
- Coins are locked using a private key, and public key is a value derived by the private key.
- **A transfer of coin**  in Bitcoin is different with just handing it over to the others. It means the owner electronically transfers the tokens present in his/her present *envelope* to the intended owners(receivers) **by locking these coins to their(receivers) public keys(putting coins in envelopes).**
- And those coins in the envelope **can only be unlocked by the each intended owner's(receiver) private key(opening an envelope).**
