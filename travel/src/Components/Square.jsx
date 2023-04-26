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
  title: "Old Town Quito + Middle of the World",
  text: "You will enjoy the magic of the old town through a walk around Quito's historic center. We will visit the Plaza Grande, which provides the atmosphere of Quito.",
  image: chq
  },
  {
  id: 2,
  title: "Mindo: The Beauty of Cloudforest",
  text: "The cloud forest awaits you to enjoy the best of nature. You can enjoy the forest by crossing it on a Tarabita, walking to a waterfall, and having fun on the Zipline. We can end with a delicious chocolate tour at one of the local farms. It depends on the options you prefer.",
  image: mndo
  },
  {
  id: 3,
  title: "Magical Quilotoa: Culture and Nature",
  text: "The wonderful highlands landscape will allow you to admire our culture and nature. We will pass through a cultural center where you can experience the art of the Cotopaxi area, make your own paintings, and there we will have a pleasant surprise for you. We pass through the Toachi Canyon to have unique photographs. Visit to the Quilotoa Lagoon and entrance to the shore.",
  image: qtoa
  },
  {
  id: 4,
  title: "Otavalo Market + Cuicocha",
  text: "One of the largest and most colorful markets in northern Ecuador welcomes you this day. On the way, you will visit a rose plantation to learn about the beautiful species we have. Then visit the real Equator line. You will learn more about our traditions and ethnic groups. You will visit the main market but also a workshop. You will also visit the beautiful Cuicocha Lagoon and the town of Cotacachi if you like to see leather products.",
  image: otv
  },
  {
  id: 5,
  title: "Nono by Bicycle",
  text: "The wonderful surroundings of Nono will allow you to have a great experience on bicycles, enjoying the natural landscape. Then we can visit a waterfall where you can recharge your batteries.",
  image: nnb
  },
  {
  id: 6,
  title: "Cotopaxi",
  text: "We drive again to the south and enter Cotopaxi National Park. We climb to the first refuge and walk to the second refuge of Cotopaxi National Park. We will be at 15800 feet. Cotopaxi also allows you to see the mountains that surround it, forming part of the Route of the Volcanoes. You will also see the Limpiopungo lagoon and can move around the lagoon, which will take you around 45 minutes, observing the beautiful birds of the area.",
  image: ctp
  },
  {
  id: 7,
  title: "Teleferico + Middle of the World + Papallacta",
  text: "Discover one of the natural viewpoints, where you can enjoy a view of the city at 4000m, on the Teleférico. Then we go to one of Ecuador's icons, the famous Middle of the World, Museum of Intiñan, and the middle of the world city. What could be better than visiting the Papallacta hot springs, known for their high medicinal and relaxation qualities?",
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
         
        </div>
      </div>
    </div>
  );
};

export default Square;

