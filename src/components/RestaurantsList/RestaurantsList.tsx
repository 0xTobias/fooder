import React from 'react';
import RestaurantCard, { Restaurant } from '../RestaurantCard/RestaurantCard';
import './RestaurantsList.scss';

const lists: Restaurant[] = [
  {
    id: "1",
    imgUrl: "https://www.sushiclub.com.ar/uploads/sucursales/69/imagenes/1.png",
    name: "SushiClub",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "2",
    imgUrl: "https://www.sushiclub.com.ar/uploads/sucursales/69/imagenes/1.png",
    name: "SushiClub",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "3",
    imgUrl: "https://www.sushiclub.com.ar/uploads/sucursales/69/imagenes/1.png",
    name: "SushiClub",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }
]

const RestaurantsList = () => (
  <div className="RestaurantsList" data-testid="RestaurantsList">
    <div className="row mx-2">
     {lists.map(rest => 
        <div className="list-group-item col-4">
          <RestaurantCard {...rest}/>
        </div>
      )}
      </div>
  </div>
);

export default RestaurantsList;
