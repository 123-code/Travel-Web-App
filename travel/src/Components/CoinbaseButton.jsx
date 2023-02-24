import React from 'react';
import '../Styling/CoinbaseButton.css';

const CoinbaseButton = () => {

    return (
        <>
     <div class="crypto-donate">
  <a class="donate-with-crypto" href="https://commerce.coinbase.com/checkout/239bbf84-4627-4c0c-8d3a-521089215b35">
    <i class="fab fa-bitcoin"></i> Pay with Crypto
  </a>
  <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
</div>


        </>
    )
}
export default CoinbaseButton;