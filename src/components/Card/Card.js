import React from "react";
import './Card.css';

const Card = ({ dragonBall }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={dragonBall.image} />
      </div>
      <div className="cardImg__info">
        <h3 className="cardName">{dragonBall.name}</h3>
        <div className="cardTypes">
          <p className="cara__info">
            {dragonBall.race} - {dragonBall.gender}
          </p>
          <div className="typesInfo">
            <div className="typesInfo__box">
              <p className="title">Base KI：</p>
              <p className="cara__info">{dragonBall.ki}</p>
            </div>
            <div className="typesInfo__box">
              <p className="title">Total KI：</p>
              <p className="cara__info">{dragonBall.maxKi}</p>
            </div>
            <div className="typesInfo__box">
              <p className="title">Affiliation</p>
              <p className="cara__info">{dragonBall.affiliation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
