import React from 'react';
import CoinbaseButton from '../Components/CoinbaseButton';
import CheckoutButton from '../Components/PayWithETH';
import Form from '../Components/Form';
import PayPalButton from './PayPalBTN';

const FormPage = () => {
    return (
        <div style={{ paddingTop: '150px', paddingLeft:'10px', marginBottom: '50px' }}>
            <h1 style={{color:'black' , textAlign: 'center'}}>Reservation Form </h1>
            <h2 style={{color:'black', textAlign: 'center'}}>For more information fill out this form, and we'll contact you </h2>
        <Form />

        <div>
           <body>
           <script src="https://www.paypal.com/sdk/js?client-id=test&currency=USD"></script>
           <div id="paypal-button-container"></div>
            </body>

            
            
        <CoinbaseButton/>
    
        <div>
      <script
        src="https://www.paypal.com/sdk/js?client-id=test&currency=USD"
        async
      ></script>
      <div id="paypal-button-container"></div>
    </div>
        </div>
        

        </div>
    );
}
export default FormPage;