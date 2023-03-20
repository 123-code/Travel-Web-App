import React from "react";
import Destinos from "../Components/Destinos";
import peruImg from './peimg.jpg'

const PeruPage = () => {
    return (
        <>
        <h1>Peru Page</h1>
        <h1>Galapagos Page</h1>
        <Destinos imageSrc={(peruImg)} title="Perú" text="Perú es un país fascinante ubicado en la costa del Pacífico de Sudamérica, conocido por su rica historia y cultura, así como por su impresionante paisaje natural. La ciudad de Machu Picchu, situada en los Andes, es una de las atracciones turísticas más famosas del mundo y atrae a millones de visitantes cada año. Pero Perú no es solo Machu Picchu: el país también tiene una deliciosa cocina, playas impresionantes y ciudades coloniales encantadoras. Además, la gente es cálida y amistosa, lo que hace que visitar Perú sea una experiencia inolvidable. Desde la cordillera de los Andes hasta la selva amazónica, Perú ofrece una amplia gama de aventuras y experiencias para cualquier tipo de viajero."/>

        </>
    );

}
export default PeruPage;