import React from 'react';
import CoinbaseButton from '../Components/CoinbaseButton';
import ConnectButton from '../Components/ConnectWalletButton';

const Payments = () => {
    return(
        <>
        <h1> Checkout: </h1>
        <CoinbaseButton />
        <ConnectButton/>
        </>
    )
}
export default Payments;