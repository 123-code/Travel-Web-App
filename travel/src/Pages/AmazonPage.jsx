import React from "react";
import Destinos from "../Components/Destinos";
import fotoEc from './ecimg.jpg';
import Square from "../Components/Square";
import { DestinosHeader } from "../Components/Destinos";
import '../Styling/Ecuador.css'

const AmazonPage = () => {
    return (
        <body >
    <div className="infoGeneral">
        <DestinosHeader imageSrc={(fotoEc)} title=" Travel to Ecuador" text="Ecuador is a small country located on the Pacific coast of South America, known for its incredible biodiversity and rich indigenous culture. The country is home to the stunning Galapagos Islands, one of the most famous tourist attractions in the world, where visitors can observe a unique variety of flora and fauna. In addition to the Galapagos, Ecuador also boasts a stunning coastline, stunning mountains, and a rich colonial history. The indigenous markets in Otavalo and Cotacachi are famous for their colorful textiles and handicrafts. There are also a plethora of national parks and nature reserves that offer visitors the opportunity to explore Ecuador's unique biodiversity. The people of Ecuador are friendly and welcoming, which makes visiting this country an unforgettable experience." />
    </div>
    <div className="sqr">
        <Square></Square>
    </div>
    <div className="lst">
        <h1 className="tt" style={{color:"black"}}> Places To Visit </h1>
        <div style={{ display: "flex" }}>
     <Destinos  imageSrc = {"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}title = "TELEFERICO + MITAD DEL MUNDO + PAPALLACTA" button="true" link="/papallacta"/>
     <Destinos  imageSrc = {"https://i.ibb.co/8cMhT5j/quilotoa.jpg"}title = "NATURAL AND HIKE QUILOTOA"  button="true" link="/quilotoa"/>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/download_159.jpeg"}title = "COTOPAXI BIKE AND HIKE"  button="true" link="cotopaxih"/>
    </div>

        <div style={{ display: "flex"}}>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/download-1_108.jpeg"}title = "OTAVALO CULTURAL AND SHOPING"  button="true"  link="/otavalo"/>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/images_1152.jpeg"}title = " MINDO ADVENTURE AND SWEET (FRIDAY)"  button="true" link="/mindo"/>
    <Destinos  imageSrc = {"https://www.linkpicture.com/q/download-2_15.jpeg"}title =  "CUYABENO DOLPHIN LODGE"  button="true" link="/cuyabeno"/>
    </div>

        <div style={{ display: "flex" }}>
            <Destinos  imageSrc = {"https://www.linkpicture.com/q/download-3_51.jpeg"}title = "COTOPAXI SUMMIT"  button="true" link="/cotopaxis"/>
        </div>
    </div>
   
        </body>
      
    );

}

export default AmazonPage;