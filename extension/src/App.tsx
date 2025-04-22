import React, { useMemo, useState, useEffect } from 'react';
import './App.css';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const network = 'devnet';
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  // Listen for attention time from content script
  const [attentionSeconds, setAttentionSeconds] = useState(0);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data && event.data.type === 'POA_ATTENTION_TICK') {
        setAttentionSeconds(event.data.attentionSeconds);
      }
    }
    window.addEventListener('message', handleMessage);
    // Query initial value from content script if available
    // @ts-ignore
    if (window.__POA_ATTENTION_SECONDS) {
      // @ts-ignore
      setAttentionSeconds(window.__POA_ATTENTION_SECONDS());
    }
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="App">
            <header className="App-header">
              <h1>PoA Extension Popup</h1>
              <WalletMultiButton />
              <p>Attention Timer: {attentionSeconds} seconds</p>
              <p>(This will be used to reward you for real engagement!)</p>
            </header>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

// For TypeScript, extend window for debugging
// @ts-ignore
window.__POA_ATTENTION_SECONDS = window.__POA_ATTENTION_SECONDS || undefined;

export default App;
