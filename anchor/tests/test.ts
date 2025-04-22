import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import assert from "assert";

describe("proof-of-attention submit_proof", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Anchor as Program<any>;

  // Replace with the wallet you want to test with
  const user = provider.wallet;

  it("Submits a proof of attention", async () => {
    const [attentionProofPda, bump] = PublicKey.findProgramAddressSync(
      [Buffer.from("proof"), user.publicKey.toBuffer()],
      program.programId
    );

    const attentionSeconds = new anchor.BN(123); // Example value

    await program.methods
      .submitProof(attentionSeconds)
      .accounts({
        attentionProof: attentionProofPda,
        user: user.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    // Fetch the account and check value
    const proof = await program.account.attentionProof.fetch(attentionProofPda);
    assert.strictEqual(proof.user.toBase58(), user.publicKey.toBase58());
    assert.strictEqual(proof.attentionSeconds.toNumber(), 123);
  });
});
