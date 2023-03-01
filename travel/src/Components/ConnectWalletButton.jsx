import React, { useRef, useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

//import {NFT_CONTRACT_ADDRESS,NFT_CONTRACT_ABI} from "../constants";
 
export default function ConnectButton() {
  const Web3ModalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 1) {
      window.alert("Change the network to mainnet");
      throw new Error("Change network to mainnet");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  useEffect(() => {
    if (!walletConnected) {
      Web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        cacheProvider: true,
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, []);

  return (
    <div>
      <title>CryptoDevs NFT</title>
      <div>
        {!walletConnected ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <button>Connected</button>
        )}
      </div>
    </div>
  );
}