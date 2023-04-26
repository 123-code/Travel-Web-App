import React from "react";
import Destinos from "../Components/Destinos";
import peruImg from './peimg.jpg'
import Square from "../Components/Square";
import '../Styling/Ecuador.css'

const PeruPage = () => {
    return (
        <>
     
        <Destinos imageSrc={(peruImg)} title="Perú" text="Peru is a fascinating country located on the Pacific coast of South America, known for its rich history and culture, as well as its stunning natural landscape. The city of Machu Picchu, located in the Andes, is one of the most famous tourist attractions in the world and attracts millions of visitors every year. But Peru is not just Machu Picchu: the country also has delicious cuisine, stunning beaches, and charming colonial cities. In addition, the people are warm and friendly, which makes visiting Peru an unforgettable experience. From the Andes mountain range to the Amazon rainforest, Peru offers a wide range of adventures and experiences for any type of traveler."/>
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