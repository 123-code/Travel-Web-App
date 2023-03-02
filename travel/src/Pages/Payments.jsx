import React, { useRef, useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import {PAYMENT_CONTRACT_ADDRESS,PAYMENT_CONTRACT_ABI} from '../Constants';
import CoinbaseButton from '../Components/CoinbaseButton';
import ConnectButton from '../Components/ConnectWalletButton';
import '../Styling/Payments.css';


const Payments = () => {
    function MakePayment(){
        const Web3ModalRef = useRef();
        const [walletConnected, setWalletConnected] = useState(false);
        const [address, setAddress] = useState("");
        const [reserveAmount, setReserveAmount] = useState(0);
    
        const connectWallet = async () => {
            try {
              await getProviderOrSigner();
              setWalletConnected(true);
            } catch (err) {
              console.error(err);
            }
          };

          const getReserveAmount = async()=>{
            const provider = await getProviderOrSigner();
            const contract = new ethers.Contract(PAYMENT_CONTRACT_ADDRESS,PAYMENT_CONTRACT_ABI,provider);
            const amount = contract.amount();
            setReserveAmount(amount);
          }

          const Checkout = async()=>{
            try{
                const signer = await getProviderOrSigner(true);
                const contract = new ethers.Contract(PAYMENT_CONTRACT_ADDRESS,PAYMENT_CONTRACT_ABI,signer);
                const tx = await contract.PayNow();
                await tx.wait();
            }catch(err){
                console.error(err);
            }
          }
    
    
        const getProviderOrSigner = async (needSigner = false) => {
            const provider = await Web3ModalRef.current.connect();
            const web3Provider = new Web3Provider(provider);
        
            const { chainId } = await web3Provider.getNetwork();
            if (chainId !== 5) {
              window.alert("Change the network to goerli");
              throw new Error("Change network to goerli");
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
                network: "mainnet",
                cacheProvider: true,
                providerOptions: {},
                disableInjectedProvider: false,
              });
              connectWallet();
    
            }
          }, []);

          useEffect(()=>{
            getReserveAmount();
          })
    
        return(
            <div>
            <head>
            <h1> </h1>
            </head>
            <body className = "main">
            <h2> Checkout: </h2>
            <CoinbaseButton />
            <h2> Or </h2>
            <label className="label">
            <h2> Pay with ETH:</h2>
            <h3> you're paying us to the address: '0x390be0D2Da9eDC0F85Ff09bfBFC874Bc8Ab665A6' </h3>
            <form>
            <label>
            <h3> Amount of ETH specified in reserve: {reserveAmount} </h3>
            <input type="text" name="name" className='entry' />
            </label>
            <div>
            <button className="button" onClick = {Checkout}> Checkout </button>
            </div>
            </form>
            </label>
            </body>
            </div>
            
        
        )
    }
    return(
        <>
        <h1> Checkout: </h1>
        <ConnectButton/>
        <MakePayment/>
        </>
    )
}
export default Payments;