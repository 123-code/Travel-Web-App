import React from "react";
import Destinos from "../Components/Destinos";
import fotoG from './gpg.jpg'
import Square from "../Components/Square";
import '../Styling/Ecuador.css'
const GalapagosPage = () => {
    return (
        <>
        
        <Destinos imageSrc={(fotoG)} title="Galápagos" text="Las Islas Galápagos son un archipiélago situado en el océano Pacífico, aproximadamente a 1000 km de la costa de Ecuador. Este conjunto de islas es conocido por su impresionante biodiversidad y por ser el lugar donde Charles Darwin desarrolló gran parte de sus teorías evolutivas.

Las Islas Galápagos cuentan con una gran variedad de ecosistemas, desde playas de arena blanca y aguas turquesas, hasta paisajes de lava y cactus gigantes. Además, alberga una gran cantidad de especies endémicas, como la iguana marina, el pingüino de las Galápagos, el cormorán no volador y la famosa tortuga gigante.

El archipiélago es un destino turístico popular por sus actividades de ecoturismo, que incluyen la observación de animales en su hábitat natural, el snorkel y el buceo. También se puede visitar el Centro de Interpretación en la isla de San Cristóbal, donde se puede aprender sobre la historia natural y la conservación de las islas.

Sin embargo, la conservación de las Islas Galápagos es un desafío constante debido a la actividad humana y al turismo descontrolado. Por lo tanto, es importante visitar las islas con conciencia ambiental y seguir las regulaciones establecidas para mantener la riqueza natural del archipiélago para futuras generaciones." />
        
        <div className="sqr">
        <Square></Square>
    </div>
    <div className="lst">
        <h1 className="tt" style={{color:"black"}}> Rates 2023 </h1>
        <div style={{ display: "flex" }}>
            <Destinos  imageSrc = {"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}title = "STANDARD RATES" button="true" link="/papallacta"/>
            <Destinos  imageSrc = {"https://i.ibb.co/8cMhT5j/quilotoa.jpg"}title = "HIGH SEASON RATES"  button="true"/>
            <Destinos  imageSrc = {"https://i.ibb.co/0hYJZ4y/IMG-20210421-134100.jpg"}title = "PROMOTIONAL RATES"  button="true"/>
        </div>
    </div>

        </>
    );

}
export default GalapagosPage;