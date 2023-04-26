import React from 'react';
import CoinbaseButton from '../Components/CoinbaseButton';
import CheckoutButton from '../Components/PayWithETH';
import Form from '../Components/Form';

const FormPage = () => {
    return (
        <div style={{ paddingTop: '150px', paddingLeft:'10px', marginBottom: '50px' }}>
            <h1 style={{color:'black' , textAlign: 'center'}}>Reservation Form </h1>
            <h2 style={{color:'black', textAlign: 'center'}}>For more information fill out this form, and we'll contact you </h2>
        <Form />

        <div>
        <CoinbaseButton/>
        <CheckoutButton />
        </div>
        

        </div>
    );
}
export default FormPage;