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
  title: "Nazca Penguin",
  text: "The Galapagos penguin is a unique species in the world, as it is the only penguin that lives in the northern hemisphere. It is the smallest and rarest penguin, adapted to life in the tropics. Its plumage is black and white, which allows it to blend in with the water and avoid being detected by predators. Its natural habitat is the Galapagos Islands, where it feeds on small fish and crustaceans. However, its population is in danger due to overfishing and pollution of its waters.",
  image: pn
  },
  {
  id: 2,
  title: "Great Hammerhead Shark",
  text: "The great hammerhead shark is a species of shark that can be found in the waters of Galapagos. It is known for its distinctive T-shaped head and for being one of the largest sharks in the world, measuring up to 6 meters in length. Although they are voracious predators, they rarely attack humans. In Galapagos, these sharks are a popular attraction for divers, who can observe them in their natural habitat.",
  image: tgh
  },
  {
  id: 3,
  title: "Sea Turtles",
  text: "Galapagos sea turtles are one of the most iconic symbols of this archipelago. They are famous for their size and longevity, some can live up to 100 years. In addition, they are fascinating marine animals, as they perform migrations over long distances and are fundamental to maintaining the balance of marine ecosystems. In Galapagos there are several species of sea turtles, including the green turtle and the hawksbill turtle. Unfortunately, these species are endangered due to illegal hunting, accidental fishing, and degradation of their natural habitat.",
  image: st
  },
  {
  id: 4,
  title: "Flamingos",
  text: "Galapagos flamingos are one of the most emblematic species of the islands. They can be found in the coastal lagoons and salt flats of the archipelago. Their distinctive pink color is due to the presence of pigments in their food, which includes small crustaceans and algae. Despite being an abundant species in the world, in Galapagos they are considered an endangered species. Galapagos flamingos are monogamous and reproduce in colonies. The couples build mud nests on the edges of the lagoons and lay a single egg. The chicks are fed with a lipid-rich secretion produced by the parents' throat gland. Their social behavior and beauty make them one of the most popular attractions for tourists visiting the islands.",
  image: fm
  },
  {
  id: 5,
  title: "Marine Iguana",
  text: "The Galapagos marine iguana is an endemic species that is only found on these islands. They are amazing animals, capable of diving to depths of up to 30 meters in search of their food. They have a unique and distinctive appearance, with their scaly skin and characteristic crests and spines on the head and back. In addition, they are sociable animals that can be found sunbathing in large groups on the rocks of the coast. The marine iguana is another example of the incredible biodiversity that can be found in the Galapagos Islands.",
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
       
        </div>
      </div>
    </div>
  );
};

export default Square;

