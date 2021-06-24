# 4. Keys and Address

## Private Keys

- A public key is derived out of a private key and typically as much possible random data should be used to generate a private key.

- Private keys associated with **uncompressed public keys**, they are 51 characters and **always start with the number 5 on mainnet** (9 on testnet)

- Private keys associated with **compressed public keys** are 52 characters and **start with a capital L or K on mainnet** (c on testnet).

- By default, a public key is always compressed.

## Bitcoin Address

- A bitcoin address is the RIPEMD160 hash of the SHA256 hash of the **public key**

- Even the public keys are not typically shared, but something called a `Bitcoin Address` is shared which is derived from the Public Key itself.

- The user shouldn’t need to see a bitcoin address the same way an internet user doesn’t need to see an IP address.
