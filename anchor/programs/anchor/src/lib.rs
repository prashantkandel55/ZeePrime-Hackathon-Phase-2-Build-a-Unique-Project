use anchor_lang::prelude::*;

declare_id!("8evHUdVAM5L9DvV8feuSGxFy6Zy62M6N6T6BufrFs6Se");

#[program]
pub mod anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }

    // Submit a proof of attention (MVP):
    pub fn submit_proof(ctx: Context<SubmitProof>, attention_seconds: u64) -> Result<()> {
        let proof = &mut ctx.accounts.attention_proof;
        proof.user = *ctx.accounts.user.key;
        proof.attention_seconds = attention_seconds;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[account]
pub struct AttentionProof {
    pub user: Pubkey,
    pub attention_seconds: u64,
}

#[derive(Accounts)]
pub struct SubmitProof<'info> {
    #[account(
        init_if_needed,
        payer = user,
        space = 8 + 32 + 8,
        seeds = [b"proof", user.key().as_ref()],
        bump
    )]
    pub attention_proof: Account<'info, AttentionProof>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
