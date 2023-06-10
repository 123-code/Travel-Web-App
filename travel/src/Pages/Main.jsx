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
    <body className='main' style={{ backgroundColor:  '#d3d3d3'}}>
    <div>
        
    </div>
    <BackgroundImageOverlay className="BIOMain" imageUrl={(img)}></BackgroundImageOverlay>

    <div style={{ width: "33,33%", float: "left",backgroundColor:  '#d3d3d3' }}>
    <body className="text" style={{ backgroundColor:  '#d3d3d3'}}>
  <TopDestinations></TopDestinations>
  <div className='testimonialsMain'>
      <Testimonials></Testimonials>
  </div>
  <div id="contact-form" className='formMain' >
      <h1 className='title'>More information</h1>
      <Form></Form>
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