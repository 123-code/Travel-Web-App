import React from 'react';
import Form from '../Components/Form';

const FormPage = () => {
    return (
        <div style={{ paddingTop: '150px', paddingLeft:'10px', marginBottom: '50px' }}>
            <h1 style={{color:'black' , textAlign: 'center'}}>Reservation Form </h1>
            <h2 style={{color:'black', textAlign: 'center'}}>Para mayor información por favor llena el siguiente formulario y nos pondremos en contacto lo más pronto posible </h2>
        <Form />
        </div>
    );
}
export default FormPage;