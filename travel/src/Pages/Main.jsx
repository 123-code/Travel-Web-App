import React from 'react';
import MainImage from '../Components/MainImage';    
import Form from '../Components/Form';
import TopDestinations from '../Components/TopDestinations';
import Testimonials from '../Components/Testimonials';
import '../App.css';
import img from '../Components/imagenprincipal.jpeg'
import BackgroundImageOverlay from '../Components/BackgroundImageOverlay';



const MainPage = ()=>{
return(
    <>
    <body className='main'>
    <div>
        
    </div>
    <BackgroundImageOverlay imageUrl={(img)}></BackgroundImageOverlay>
    <div style={{ width: "33,33%", float: "left" }}>
<body  className="text">
<Form></Form>
<TopDestinations></TopDestinations>
<Testimonials></Testimonials>
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