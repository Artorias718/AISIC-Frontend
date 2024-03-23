import React from 'react';
import '../styles/Header.css'; // Importa il file CSS per lo stile
import '../styles/WalletConnect.css'
import { ConnectWallet } from '@thirdweb-dev/react';

function Header() {
  return (
    <>
    <header className="header">
      <div className="header-left">
        <a href="/">
          <img src="src\assets\AISIC2.png" alt="Logo" />
        </a>
      </div>
      <div className="header-center">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/aidrop">Airdrop</a></li>
            <li><a href="/vault">Vault</a></li>
            <li><a href="/luckydrop">LuckyDrop</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <ConnectWallet
         className="connect-wallet-button"
        />
      </div>
      

    </header>
    </>
  );
}

export default Header;
