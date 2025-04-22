# Proof-of-Attention (PoA) Ad Platform

## Overview
A decentralized ad platform on Solana where users earn crypto for genuine attention, advertisers pay for real engagement, and privacy is preserved with ZK proofs.

### Components
- **extension/**: Browser extension for attention mining and wallet integration.
- **dashboard/**: React frontend for users/advertisers.
- **anchor/**: Solana smart contract (Anchor framework).
- **zk/**: ZK proof circuits (mock or Circom).
- **oracle/**: Oracle simulation for off-chain data (mock for MVP).

## Getting Started
Each component has its own README for setup. See below for quickstart guides.

### Prerequisites
- Node.js (LTS)
- Yarn or npm
- Rust + Solana CLI (for smart contract)
- Circom (for ZK, optional)

### Quickstart
1. Clone the repo
2. Install dependencies (see each directory)
3. Run each component as described in their README

## Directory Structure

```
poa-platform/
├── anchor/        # Solana smart contract (see anchor/README.md)
├── dashboard/     # React frontend
├── extension/     # Browser extension
├── oracle/        # Oracle simulation
├── zk/            # ZK circuits (optional/mocked)
└── README.md      # (this file)
```

## Hackathon Submission
- [ ] Demo: Live dashboard + extension
- [ ] Pitch: Loom video
- [ ] Docs: This README + subcomponent READMEs

---
See each subdirectory for more details.
