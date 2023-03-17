import React from "react";
import Destinos from "../Components/Destinos";
import peruImg from './peimg.jpg'
import Square from "../Components/Square";
import '../Styling/Ecuador.css'

const PeruPage = () => {
    return (
        <>
     
        <Destinos imageSrc={(peruImg)} title="Perú" text="Perú es un país fascinante ubicado en la costa del Pacífico de Sudamérica, conocido por su rica historia y cultura, así como por su impresionante paisaje natural. La ciudad de Machu Picchu, situada en los Andes, es una de las atracciones turísticas más famosas del mundo y atrae a millones de visitantes cada año. Pero Perú no es solo Machu Picchu: el país también tiene una deliciosa cocina, playas impresionantes y ciudades coloniales encantadoras. Además, la gente es cálida y amistosa, lo que hace que visitar Perú sea una experiencia inolvidable. Desde la cordillera de los Andes hasta la selva amazónica, Perú ofrece una amplia gama de aventuras y experiencias para cualquier tipo de viajero."/>
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
        </>
    );

}
export default PeruPage;