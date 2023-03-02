import React, { useRef, useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { Web3Provider } from "@ethersproject/providers";
import Web3 from 'web3';
import { ethers,utils } from "ethers";
import {PAYMENT_CONTRACT_ADDRESS,PAYMENT_CONTRACT_ABI} from '../Constants';
import CoinbaseButton from '../Components/CoinbaseButton';
import ConnectButton from '../Components/ConnectWalletButton';
import '../Styling/Payments.css';


const Payments = () => {
    function MakePayment(){
   

       async function Payment(){

        if (window.ethereum) {
          window.alert("llego")
          const provider = new Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(PAYMENT_CONTRACT_ADDRESS,PAYMENT_CONTRACT_ABI, signer);
          console.log(contract.amount);
        
          contract.methods.PayNow().send({ value: 1200 })
            .then((tx) => {
              console.log(tx);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          window.alert(";")
          console.error('MetaMask not detected');
        }
        }
        
       


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
            <h3> Amount of ETH specified in reserve:  </h3>
            <input type="text" name="name" className='entry' />
            </label>
            <div>
            <button className="button" onClick={ Payment()}> Checkout </button>
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