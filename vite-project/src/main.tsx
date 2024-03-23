import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "ethereum";
const CID = "7176d1de5bd378f3ba25e45a44884fc6"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <ThirdwebProvider
      activeChain={activeChain}
      clientId={CID}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
