# 5. ECDSA, Signing and Verification

## ECDSA

- Once the Private and Public keys are created, they can then be used for something called **digital signatures**. `ECDSA` is in a way the same as DSA but uses elliptic curve functions as the intractable function in place of prime number factorisation.

- `ECDSA` using an elliptic curve makes the size of the keys significantly smaller than what the size of the keys used nowadays in DSA.

## Signing

- Signing takes two arguments

    1. SHA256 hashed data

    2. keypairs (PubKey & PrivKey)

- Signing Steps:  
Choose data: “random data” and add prefix “Bitcoin Signed Message:\n”
Hash data with double sha256
Sign data with ECDSA
Format signature (r, s) in base64

## Verification

- Verification takes three arguments

    1. SHA256 hashed data

    2. Signature

    3. Public Key

- Verification Steps:

Receive data, create a hash of it
Receive Bitcoin Address (not public key)
Derive four candidate public key from signature
Try ECDSA signature verification against all 4 and find if it matches one, that is the valid address and signature is valid (this is a specific property of Bitcoin address. It will not be needed in case public key is shared but this is typically not what is shared in case of Bitcoin applications). This only works for signing data not encrypting data where the public key is used (for ex in transactions).

## Usage of digital signatures

- The digital signatures can not only be used in signing of transactions, but also for signing arbitrary messages as well.

- *ex) end to end encrypted communication (email, chats) in advanced applications, signing a file, contract or even signing an application codebase.*
