import React from "react";
import Destinos from "../Components/Destinos";
import fotoEc from './ecimg.jpg';
import Square from "../Components/Square";
const AmazonPage = () => {
    return (
        <body >
<h1>Highlands Page</h1>
    <Destinos imageSrc={(fotoEc)} title=" Travel to Ecuador" text="Ecuador es un pequeño país ubicado en la costa del Pacífico de América del Sur, conocido por su increíble biodiversidad y su rica cultura indígena. El país es el hogar de las impresionantes Islas Galápagos, una de las atracciones turísticas más famosas del mundo, donde los visitantes pueden observar una variedad única de flora y fauna. Además de las Galápagos, Ecuador también cuenta con una impresionante costa, impresionantes montañas y una rica historia colonial. Los mercados indígenas en Otavalo y Cotacachi son famosos por sus coloridos textiles y artesanías. También hay una gran cantidad de parques nacionales y reservas naturales que ofrecen a los visitantes la oportunidad de explorar la biodiversidad única de Ecuador. La gente de Ecuador es amigable y acogedora, lo que hace que visitar este país sea una experiencia inolvidable." />
    <Square></Square>
    
     <h1 style={{color:"black"}}> Places To Visit </h1>
     <div style={{ display: "flex" }}>
     <Destinos  imageSrc = {"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}title = "TELEFERICO + MITAD DEL MUNDO + PAPALLACTA" button="true" link="/papallacta"/>
     <Destinos  imageSrc = {"https://i.ibb.co/8cMhT5j/quilotoa.jpg"}title = "NATURAL AND HIKE QUILOTOA"  button="true" link="/quilotoa"/>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/download_159.jpeg"}title = "COTOPAXI BIKE AND HIKE"  button="true" link="cotopaxih"/>
    </div>

    <div style={{ display: "flex" }}>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/download-1_108.jpeg"}title = "OTAVALO CULTURAL AND SHOPING"  button="true"  link="/otavalo"/>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/images_1152.jpeg"}title = " MINDO ADVENTURE AND SWEET (FRIDAY)"  button="true" link="/mindo"/>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/download-2_15.jpeg"}title =  "CUYABENO DOLPHIN LODGE"  button="true" link="cuyabeno"/>
    </div>

    <div style={{ display: "flex" }}>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/download-3_51.jpeg"}title = "COTOPAXI SUMMIT"  button="true" link="/cotopaxis"/>
    </div>
     
   
        </body>
      
        
        
    );

}//cuyabeno: https://www.linkpicture.com/q/download-2_15.jpeg
// otavalo: https://www.linkpicture.com/q/download-1_108.jpeg
// mindo:   https://www.linkpicture.com/q/images_1152.jpeg

export default AmazonPage;