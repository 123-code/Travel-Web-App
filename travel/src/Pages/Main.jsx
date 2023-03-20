import React from 'react';  
import Form from '../Components/Form';
import TopDestinations from '../Components/TopDestinations';
import Testimonials from '../Components/Testimonials';
import '../App.css';
import img from '../Components/imagenprincipal.jpeg'
import BackgroundImageOverlay from '../Components/BackgroundImageOverlay';


import '../Styling/Main.css'

const MainPage = ()=>{
return(
    <>
    <body className='main'>
    <div>
        
    </div>
    <BackgroundImageOverlay imageUrl={(img)}></BackgroundImageOverlay>

    <div style={{ width: "33,33%", float: "left" }}>
<body  className="text">
<a className="singup">Si requieres mayor información, llena el siguiente formulario</a>
<Form></Form>
<TopDestinations></TopDestinations>
<div className='testimonialsMain'>
    <Testimonials></Testimonials>
</div>
<div id="contact-form" className='formMain' >
    <h1 className='titleForm'>Solicita Más Información</h1>
    <Form  ></Form>
</div>
</body>


</div>
    
    
    </body>
   

    </>
) 
}
export default MainPage; 

/*
<a href="https://ibb.co/D4HDxGT"><img src="https://i.ibb.co/Zdp6nH7/afb509d1-0135-4731-8edc-3a098824f8b2-1.png" alt="afb509d1-0135-4731-8edc-3a098824f8b2-1" border="0"></a>
*/