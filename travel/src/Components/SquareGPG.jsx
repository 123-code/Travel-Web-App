import React, { useState } from "react";
import "../Styling/Square.css";
import chq from '../Imgs/chq.jpg'
import mndo from '../Imgs/mndo.jpg'
import qtoa from '../Imgs/qtoa.jpg'
import otv from '../Imgs/otv.jpg'
import nnb from '../Imgs/nnb.jpg'
import ctp from '../Imgs/ctp.jpg'
import mdm from '../Imgs/mdm.jpeg'
import pn from '../Imgs/pn.jpeg'
import tgh from '../Imgs/tgh.jpeg'
import st from '../Imgs/st.jpeg'
import fm from '../Imgs/fm.jpeg'
import im from '../Imgs/im.png'
const data = [
  {
    id: 1,
    title: "Pinguino de Nazca",
    text: "El pingüino de las Galápagos es una especie única en el mundo, ya que es el único pingüino que vive en el hemisferio norte. Es el pingüino más pequeño y raro, adaptado a la vida en los trópicos. Su plumaje es de color negro y blanco, lo que le permite camuflarse en el agua y evitar ser detectado por sus depredadores. Su hábitat natural son las islas Galápagos, donde se alimenta de peces pequeños y crustáceos. Sin embargo, su población está en peligro debido a la pesca excesiva y la contaminación de sus aguas.",
    image: pn 
  },
  {
    id: 2,
    title: "Tiburón Cabeza de martillo (Great Hammerhead)",
    text: "El tiburón cabeza de martillo, también conocido como great hammerhead, es una especie de tiburón que se puede encontrar en las aguas de Galápagos. Es conocido por su cabeza distintiva en forma de T y por ser uno de los tiburones más grandes del mundo, llegando a medir hasta 6 metros de longitud. Aunque son depredadores voraces, rara vez atacan a los humanos. En Galápagos, estos tiburones son una atracción popular para los buceadores, quienes pueden observarlos en su hábitat natural.",
    image: tgh
  },
  {
    id: 3,
    title: "Tortugas Marinas",
    text: "Las tortugas marinas de Galápagos son uno de los iconos más emblemáticos de este archipiélago. Son famosas por su tamaño y longevidad, algunas pueden vivir hasta 100 años. Además, son animales marinos fascinantes, ya que realizan migraciones a largas distancias y son fundamentales para mantener el equilibrio de los ecosistemas marinos. En Galápagos existen varias especies de tortugas marinas, incluyendo la tortuga verde y la tortuga de Carey. Lamentablemente, estas especies están en peligro debido a la caza ilegal, la pesca accidental y la degradación de su hábitat natural.",
    image: st
  },
  {
    id: 4,
    title: "Flamingos",
    text: "Los flamencos de Galápagos son una de las especies más emblemáticas de las islas. Se pueden encontrar en las lagunas costeras y salinas del archipiélago. Su distintivo color rosa se debe a la presencia de pigmentos en su alimento, que incluye pequeños crustáceos y algas. A pesar de ser una especie abundante en el mundo, en Galápagos es considerada una especie en peligro de extinción. Los flamencos de Galápagos son monógamos y se reproducen en colonias. Las parejas construyen nidos de barro en los bordes de las lagunas y ponen un solo huevo. Los polluelos son alimentados con una secreción rica en lípidos que produce la glándula de la garganta de los padres. Su comportamiento social y su belleza los convierten en uno de los atractivos más populares para los turistas que visitan las islas.",
    image: fm
  },
  {
    id: 5,
    title: "Iguana Marina",
    text: "La iguana marina de Galápagos es una especie endémica que solo se encuentra en estas islas. Son animales increíbles, capaces de bucear a profundidades de hasta 30 metros en busca de su alimento. Tienen una apariencia única y distintiva, con su piel escamosa y sus características crestas y espinas en la cabeza y la espalda. Además, son animales sociables que pueden encontrarse tomando el sol en grandes grupos en las rocas de la costa. La iguana marina es un ejemplo más de la increíble biodiversidad que se puede encontrar en las Islas Galápagos.",
    image: im
  }
];

const Square = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="square">
      <div className="left-column">
        {data.map((item) => (
          <div
            key={item.id}
            className={`item ${item.id === selectedItem.id ? "selected" : ""}`}
            onClick={() => handleItemClick(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="right-column">
        <h1 className="title">{selectedItem.title}</h1>
        <div className="ps">
          <p>{selectedItem.text}</p>
        </div>
        <img src={selectedItem.image} alt="Imagen" className="image" />
        <div
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <button className="btnSq">Quiero Saber más</button>
        </div>
      </div>
    </div>
  );
};

export default Square;

