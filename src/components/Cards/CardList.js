import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardList.css";
import RayquazaImage from "../../assets/Rayquaza.jpg";

const CardList = () => {
  const navigate = useNavigate();

  const cards = [
    { 
      id: 1, 
      title: "Spaceport America Cup 2022", 
      image: RayquazaImage, 
      heading: "Rayquaza", 
      details: { 
        Competition: "Spaceport America Cup 2022", 
        Weight: "26kg", 
        Apogee: "3.55km", 
        Payload: "Acoustic Dampening of CNT" 
      } 
    },
    { 
      id: 2, 
      title: "Rocket Championship 2021", 
      image: "/path/to/rocket2021.jpg", 
      details: { 
        Competition: "Rocket Championship 2021", 
        Weight: "30kg", 
        Apogee: "4.0km", 
        Payload: "Scientific Instruments" 
      } 
    },
    { 
      id: 3, 
      title: "Interstellar Competition 2023", 
      image: "/path/to/interstellar.jpg", 
      details: { 
        Competition: "Interstellar Competition 2023", 
        Weight: "28kg", 
        Apogee: "3.8km", 
        Payload: "Data Transmission Unit" 
      } 
    }
  ];
  

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => navigate(`/details/${card.id}`, { state: card })}
        >
          <img src={card.image} alt={card.title} className="card-image" />
          <h3 className="card-title">{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardList;