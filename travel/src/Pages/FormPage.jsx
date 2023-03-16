import React from 'react';
import Form from '../Components/Form';

const FormPage = () => {
    return (
        <div style={{ paddingTop: '150px', paddingLeft:'10px' }}>
            <h1 style={{color:'black'}}>Reservation Form </h1>
            <h2 style={{color:'black'}}>please fill the form below, we will contact you soon. </h2>
        <Form />
        </div>
    );
}
export default FormPage;