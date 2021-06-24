# 3. Hash Functions

| Hash Function | Output Length | Description | Usage in Bitcoin |
|----------------|----------------|--------------|-------------------|
| SHA256 | 32 bytes | Generates unique 256-bit value for a text | **Proof of work algorithm** |
| SHA256SHA256(SHA265d) | 32 bytes | SHA256 hash of the SHA256 hash. | **used in blocks and transactions** |
| SHA512 | 64 bytes | Generates unique 512-bit value for a text | **commonly used in wallet encryption** |
| RIPEMD160 | 20 bytes | Generates unique 160-bit value for a text | **Creation of Bitcoin Address** |
| SHA256RIPEMD160 | 20 bytes | RIPEMD160 hash of the SH256 hash.  | **Creation of Bitcoin Address** |
| sha256HMAC/sha512HMAC | 32 bytes | hash(data1 + data2) to prevent length extension attack use : HMAC(data1, data2). HMAC is an algorithm which can be used with any hash function, this case SHA256 | **Creation of Bitcoin Address** |


## Hash function properties

1. Hash functions are intractable (One way functions). **Very difficult to derive the input value from output but easy to get the output if you know the input.**

2. Even a single bit change in the input will **significantly change the hash output value.**

3. The input can be any length, however, **the output is always a fixed** (for instance, 256 bits for SHA256, or 160 bits for RIPEMD160).
