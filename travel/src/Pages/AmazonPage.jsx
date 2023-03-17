import React from "react";
import Destinos from "../Components/Destinos";
import fotoEc from './ecimg.jpg';
import Square from "../Components/Square";
import '../Styling/Ecuador.css'
const AmazonPage = () => {
    return (
        <body >
    <div className="infoGeneral">
        <Destinos imageSrc={(fotoEc)} title=" Travel to Ecuador" text="Ecuador es un pequeño país ubicado en la costa del Pacífico de América del Sur, conocido por su increíble biodiversidad y su rica cultura indígena. El país es el hogar de las impresionantes Islas Galápagos, una de las atracciones turísticas más famosas del mundo, donde los visitantes pueden observar una variedad única de flora y fauna. Además de las Galápagos, Ecuador también cuenta con una impresionante costa, impresionantes montañas y una rica historia colonial. Los mercados indígenas en Otavalo y Cotacachi son famosos por sus coloridos textiles y artesanías. También hay una gran cantidad de parques nacionales y reservas naturales que ofrecen a los visitantes la oportunidad de explorar la biodiversidad única de Ecuador. La gente de Ecuador es amigable y acogedora, lo que hace que visitar este país sea una experiencia inolvidable." />
    </div>
    <div className="sqr">
        <Square></Square>
    </div>
    <div className="lst">
        <h1 className="tt" style={{color:"black"}}> Places To Visit </h1>
        <div style={{ display: "flex" }}>
            <Destinos  imageSrc = {"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}title = "TELEFERICO + MITAD DEL MUNDO + PAPALLACTA" button="true" link="/papallacta"/>
            <Destinos  imageSrc = {"https://i.ibb.co/8cMhT5j/quilotoa.jpg"}title = "NATURAL AND HIKE QUILOTOA"  button="true"/>
            <Destinos  imageSrc = {"https://i.ibb.co/0hYJZ4y/IMG-20210421-134100.jpg"}title = "COTOPAXI BIKE AND HIKE"  button="true"/>
        </div>

        <div style={{ display: "flex" }}>
            <Destinos  imageSrc = {"https://i.ibb.co/0hYJZ4y/IMG-20210421-134100.jpg"}title = "OTAVALO CULTURAL AND SHOPING"  button="true"/>
            <Destinos  imageSrc = {"https://i.ibb.co/0hYJZ4y/IMG-20210421-134100.jpg"}title = " MINDO ADVENTURE AND SWEET (FRIDAY)"  button="true"/>
            <Destinos  imageSrc = {"https://i.ibb.co/0hYJZ4y/IMG-20210421-134100.jpg"}title =  "CUYABENO DOLPHIN LODGE"  button="true"/>
        </div>

        <div style={{ display: "flex" }}>
            <Destinos  imageSrc = {"https://i.ibb.co/0hYJZ4y/IMG-20210421-134100.jpg"}title = "COTOPAXI SUMMIT"  button="true"/>
        </div>
    </div>
   
        </body>
      
        
        
    );

}
export default AmazonPage;