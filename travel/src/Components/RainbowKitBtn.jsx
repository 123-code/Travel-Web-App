import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import  RButton  from "./RButton";

export default function RainbowConnectButton() {
    const { chains, provider } = configureChains(
        [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
        [alchemyProvider({ alchemyId:" process.env.ALCHEMY_ID" }), publicProvider()]
      );
      
      const { connectors } = getDefaultWallets({
        appName: "My RainbowKit App",
        chains
      });
      
      const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider
      });
      
    return (
    <>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <RButton/>
      </RainbowKitProvider>
    </WagmiConfig>
    </>)

}