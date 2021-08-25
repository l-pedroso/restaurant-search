import React from "react";
import ReactStars from "react-rating-stars-component";

import { Address, Restaurant, RestaurantInfo, Title, RestaurantPhoto } from "./styles";

import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do restaurante</Title>
            <ReactStars edit={false} count={5}  value={4} isHalf activeColor="orange"/>
            <Address>Rua Gisto Paulo</Address>
        </RestaurantInfo>
        <RestaurantPhoto  src={restaurante} alt="foto do restaurante"/>
    </Restaurant>


);

export default RestaurantCard;


