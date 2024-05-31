import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Analytics } from "@vercel/analytics/react"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Get projectId
const projectId = 'b1d1d0ac24f0f3db3f86af0a779de1ca'

// 2. Set chains
const mainnet = {
  chainId: 31,
  name: 'RSK Testnet',
  currency: 'tRBTC',
  explorerUrl: 'https://explorer.testnet.rsk.co',
  rpcUrl: 'https://public-node.testnet.rsk.co'
}

// 3. Create a metadata object
const metadata = {
  name: 'Tokenchat',
  description: 'Token Launcher',
  url: 'https://tokenchat.app', // origin must match your domain & subdomain
  icons: ["img"]
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Analytics />
  </>
);