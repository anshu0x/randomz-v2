import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css';

import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const chainId = ChainId.BinanceSmartChainTestnet;

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ThirdwebProvider activeChain={chainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
)
