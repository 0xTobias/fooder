import React from 'react';
import './RestaurantCard.scss';

export interface Restaurant {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
}

const RestaurantCard = ({id, imgUrl, name, description}: Restaurant) => (
  <div id={id} className="RestaurantCard" data-testid="RestaurantCard">
    <div className="card">
        <img src={imgUrl} alt="logo"/>
        <div className="card-body">
          <h5 className="card-title text-left">{name}</h5>
          <p className="card-text text-left">{description}</p>
        </div>
      </div>
  </div>
);

export default RestaurantCard;
