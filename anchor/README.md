# Proof-of-Attention Anchor Program

This directory contains the Anchor smart contract and TypeScript tests for the Proof-of-Attention (PoA) platform on Solana.

## Project Structure

- `programs/anchor/` — Rust smart contract source code.
- `tests/` — TypeScript integration tests using Anchor framework.
- `Anchor.toml` — Anchor project configuration.
- `tsconfig.json` — TypeScript configuration for tests.

## Prerequisites

- **Solana CLI** and **Anchor CLI** installed (recommended via Ubuntu/WSL for Windows users)
- **Node.js** and **yarn** installed
- Keypair at `~/.config/solana/id.json` (see below)

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

2. **Create Solana keypair** (if you don't have one):
   ```sh
   solana-keygen new --outfile ~/.config/solana/id.json
   ```

3. **Configure Solana CLI:**
   ```sh
   solana config set --keypair ~/.config/solana/id.json
   solana config set --url localhost
   ```

## Building the Program

```sh
anchor build
```

## Running Tests

1. **Start from the `anchor` directory:**
   ```sh
   cd /mnt/c/Users/prash/Downloads/Projects/Hackathon/ZeePrime Hackathon Phase 2 Build a Unique Project/poa-platform/anchor
   ```
2. **Set environment variables:**
   ```sh
   export ANCHOR_PROVIDER_URL=http://127.0.0.1:8899
   export ANCHOR_WALLET=~/.config/solana/id.json
   ```
3. **Run tests:**
   ```sh
   anchor test
   # or
   yarn run ts-mocha -p ./tsconfig.json -t 1000000 tests/*.ts
   ```

## Troubleshooting

- If you get `No test files found`, ensure your test files are named `*.ts` and are in the `tests/` directory.
- If you see errors about missing keypairs, ensure your keypair file exists at `~/.config/solana/id.json` and permissions are correct.
- If you see errors about `Anchor.toml` not found, make sure you are running tests from the `anchor` directory where `Anchor.toml` is located.
- For path issues, avoid spaces in directory names if possible.

## Directory Layout

```
anchor/
├── Anchor.toml
├── README.md
├── tsconfig.json
├── tests/
│   └── submit_proof.ts
├── programs/
│   └── anchor/
│       └── src/
│           └── lib.rs
...
```

## License
MIT
