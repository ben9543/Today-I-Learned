# 2. Points and Elliptic curves


## What is Elliptic Curves?

## Usage of Elliptic Curves in Bitcoin

- `ECDSA`(elliptic curve digital signature algorithm) is at the centre of Bitcoin’s `UTXO` creation and management.

-  Elliptic curves are special curves fulfilling the equation:

```
y2 = 𝑥2 + a𝑥 + 𝑏 where, 4𝑎3 + 27𝑏3 ≠ 0
```

- Bitcoin uses a very specific elliptic curve, namely Koblitz curves defined under secp256k1 standard:

```
y2 = (𝑥3 + 7) mod p
```

- For these curves, there is a specific value for something called a Base Point, G.

- All points in this curve can be represented by the form of nG where, both n and G are big numbers.

- Any point in the curve can be defined by its x and y value and denoted typically as P = (Px, Py). (Px and Py are big numbers)

- For any point P on the curve, there always exists some p such that `P = pG`

- When **p is a private key** and **P is a public key** then `P = pG` and P will be the public key.
