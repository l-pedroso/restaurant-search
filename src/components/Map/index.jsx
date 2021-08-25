import React, {useState} from "react";
import { GoogleApiWrapper, Map } from 'google-maps-react';


export const MapContainer = (props) => {

    const [map, setMap] = useState(null);

    const {google} = props;

    function searchNearby(map, Center){
        const service = new google.maps.places.PlacesServices(map);

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurants']
        };
    
        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log('restaurants', results);
            }
        });
    };

    function onMapReady(_, map){
        setMap(map);
        searchNearby(map, map.center);
    }

   
    return (
        <Map google={google} centerAroundCurrentLocation  onReady={onMapReady}/>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'
})(MapContainer)