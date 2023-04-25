import React from "react";
import Destinos from "../Components/Destinos";
import fotoG from './gpg.jpg'
import Square from "../Components/Square";
import SquareGPG from "../Components/SquareGPG";
import cruceros from '../Components/Cruceros';
import '../Styling/Ecuador.css'
import Cruceros from "../Components/Cruceros";
import { DestinosHeader } from "../Components/Destinos";
const GalapagosPage = () => {
    return (
        <>
         <div className="infoGeneral">
        <DestinosHeader imageSrc={(fotoG)} title=" Travel to Galápagos" text="The Galapagos Islands are an archipelago located in the Pacific Ocean, 
        approximately 1000 km off the coast of Ecuador. This group of islands is known for its impressive biodiversity and for being the place where Charles Darwin developed much of his evolutionary theories. The Galapagos Islands boast a wide variety of ecosystems, from white sand beaches and turquoise waters, to lava landscapes and giant cactus. In addition, it is home to a large number of endemic species, such as the marine iguana, the Galapagos penguin, the flightless cormorant and the famous giant tortoise.

            The archipelago is a popular tourist destination for its ecotourism activities, which include observing animals in their natural habitat, snorkeling and diving. You can also visit the Interpretation Center on the island of San Cristobal, where you can learn about the natural history and conservation of the islands. However, the conservation of the Galapagos Islands is a constant challenge due to human activity and uncontrolled tourism. Therefore, it is important to visit the islands with environmental awareness and follow the regulations established to maintain the natural wealth of the archipelago for future generations." />
    </div>

        <h2 className="subG" style={{textAlign:'center', marginBottom:'50px', fontSize:'30'}}> Flora & fauna </h2>
        
        <div className="sqr">
        <SquareGPG></SquareGPG>
        
    </div>
    <div className="CrucerosGpg">

    <Cruceros></Cruceros>

    </div>
    {/*
    <div className="lst">
        <h1 className="tt" style={{color:"black"}}> Rates 2023 </h1>
        <div style={{ display: "flex" }}>
            <Destinos  imageSrc = {"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}title = "STANDARD RATES" button="true" link="/high"/>
            <Destinos  imageSrc = {"https://i.ibb.co/8cMhT5j/quilotoa.jpg"}title = "HIGH SEASON RATES"  button="true"/>
            <Destinos  imageSrc = {"https://i.ibb.co/0hYJZ4y/IMG-20210421-134100.jpg"}title = "PROMOTIONAL RATES"  button="true"/>
        </div>
    </div>
    */}
        
        </>
    );

}
export default GalapagosPage;