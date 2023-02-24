import React from "react";
import Destinos from "../Components/Destinos";
import fotoEc from './ecimg.jpg'
const AmazonPage = () => {
    return (
        <>
        <h1>Highlands Page</h1>
       
        <Destinos imageSrc={(fotoEc)} title="Ecuador" text="Ecuador es un pequeño país ubicado en la costa del Pacífico de América del Sur, conocido por su increíble biodiversidad y su rica cultura indígena. El país es el hogar de las impresionantes Islas Galápagos, una de las atracciones turísticas más famosas del mundo, donde los visitantes pueden observar una variedad única de flora y fauna. Además de las Galápagos, Ecuador también cuenta con una impresionante costa, impresionantes montañas y una rica historia colonial. Los mercados indígenas en Otavalo y Cotacachi son famosos por sus coloridos textiles y artesanías. También hay una gran cantidad de parques nacionales y reservas naturales que ofrecen a los visitantes la oportunidad de explorar la biodiversidad única de Ecuador. La gente de Ecuador es amigable y acogedora, lo que hace que visitar este país sea una experiencia inolvidable." />
       
        </>
        
    );

}
export default AmazonPage;