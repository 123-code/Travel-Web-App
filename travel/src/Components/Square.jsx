import React, { useState } from "react";
import "../Styling/Square.css";

const data = [
  {
    id: 1,
    title: "Título 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/300x200?text=Imagen+1"
  },
  {
    id: 2,
    title: "Título 2",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/300x200?text=Imagen+2"
  },
  {
    id: 3,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 4,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 5,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 6,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 7,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 8,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 9,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 10,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 11,
    title: "Título 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/300x200?text=Imagen+3"
  },
  {
    id: 12,
    title: "Título 3",
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
  <p>{selectedItem.text}</p>
  <img src={selectedItem.image} alt="Imagen" className="image" />
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <button className="btnRegistrar">Quiero Saber más</button>
</div>

</div>

    </div>
  );
};

export default Square;
