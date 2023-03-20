import React, { useState } from "react";
import "../Styling/Square.css";
import chq from '../Imgs/chq.jpg'
import mndo from '../Imgs/mndo.jpg'
import qtoa from '../Imgs/qtoa.jpg'
import otv from '../Imgs/otv.jpg'
import nnb from '../Imgs/nnb.jpg'
import ctp from '../Imgs/ctp.jpg'
import mdm from '../Imgs/mdm.jpeg'

const data = [
  {
    id: 1,
    title: "Ciudad Antigua de Quito + Mitad del Mundo",
    text: "La magia del casco antiguo se disfrutará a través de un paseo por el casco antiguo de Quito. Visitaremos la Plaza Grande que le brinda el ambiente de Quito.",
    image: chq 
  },
  {
    id: 2,
    title: "Mindo: La belleza de cloudforest",
    text: "El bosque nublado te esperará para que disfrutes de lo mejor de la naturaleza. Podrás disfrutar del bosque atravesándolo en una Tarabita, caminando hasta una cascada y divirtiéndote en el Zipline. Podemos finalizar con un delicioso recorrido de chocolate en una de las fincas locales. Depende de las opciones que prefieras.",
    image: mndo
  },
  {
    id: 3,
    title: "Quilotoa Mágica: Cultura y Naturaleza",
    text: "El maravilloso paisaje de las tierras altas le permitirá admirar nuestra cultura y naturaleza. Pasamos por un centro cultural donde podrán experimentar el arte de la zona del Cotopaxi y ustedes mismos harán sus pinturas y allí tendremos una grata sorpresa para ustedes. Pasamos por el Cañón de Toachi para tener fotografías únicas. Visita a la Laguna del Quilotoa y entrada a la orilla.",
    image: qtoa
  },
  {
    id: 4,
    title: "Mercado de Otavalo + Cuicocha",
    text: "Uno de los mercados más grandes y coloridos del norte de Ecuador te recibe este día. En el camino visitará una plantación de rosas para conocer las hermosas especies que tenemos. Luego visite la verdadera línea de Ecuador. Aprenderá más sobre nuestras tradiciones y nuestros grupos étnicos. Visitarás el mercado principal pero también un taller. Además visitará la hermosa Laguna de Cuicocha y visitará el pueblo de Cotacachi si le gusta ver productos de cuero.",
    image: otv
  },
  {
    id: 5,
    title: "Nono en Bicicleta",
    text: "Los maravillosos alrededores de Nono te permitirán tener una gran experiencia en bicicletas disfrutando del paisaje de la naturaleza. Luego podremos tener la visita de una cascada donde recargarán sus baterías.",
    image: nnb
  },
  {
    id: 6,
    title: "Cotopaxi",
    text: "Conducimos nuevamente hacia el sur y nos internaremos en el Parque Nacional Cotopaxi. Subimos al primer refugio y caminaremos hasta el segundo refugio del Parque Nacional Cotopaxi. Estaremos a 15800 pies. Cotopaxi también te permite ver las montañas que se encuentran en los alrededores formando parte de la Ruta de los Volcanes. También se verá la laguna de Limpiopungo y podrá moverse alrededor de la laguna, lo que le llevará alrededor de 45 minutos observando las hermosas aves de la zona.",
    image: ctp
  },
  {
    id: 7,
    title: "Teleferico + Mitad del Mundo + Papallacta",
    text: "Descubre uno de los miradores naturales, donde podrás disfrutar de una vista a la ciudad a 4000m, en el Teleférico, luego nos vamos a uno de los iconos de Ecuador, la famosa Mitad del Mundo, Museo del Intiñan y ciudad mitad del mundo, que mejor luego visitar las termas de Papallacta conocidas por alto grado medicinal y de relajación.",
    image: mdm
  },
  {
    id: 8,
    title: "Cuyabeno Dolphin Lodge",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
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

