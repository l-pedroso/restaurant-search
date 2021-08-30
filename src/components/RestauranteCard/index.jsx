import React from "react";
import ReactStars from "react-rating-stars-component";

import { Address, Restaurant, RestaurantInfo, Title, RestaurantPhoto } from "./styles";

import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = ({restaurant, onClick}) => (
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars edit={false} count={5}  value={restaurant.rating} isHalf activeColor="orange"/>
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto  src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="foto do restaurante"/>
    </Restaurant>


);

export default RestaurantCard;


