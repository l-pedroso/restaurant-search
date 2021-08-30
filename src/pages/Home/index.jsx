import React, { useState } from "react";
import { Container, Search, Logo, Wrapper, CarrouselTitle, Carousel, MapContainer } from './styles';
import logo from "../../assets/logo.svg"
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import theme from '../../theme';
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from '../../components';
import { useSelector } from "react-redux";

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState('');
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        autoplay: true
    };

    function hadleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    };

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
        console.log('placeID ->', placeId);
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined
                        //onTrailingIconSelect={() => this.setState({ value: '' })}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onKeyPress={hadleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarrouselTitle theme={theme}>Na sua área</CarrouselTitle>
                    <Carousel {...settings}>
                        {restaurants.map((restaurant) => (<Card
                            photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                            title={restaurant.name}
                            key={restaurant.place_id}
                        />))}
                    </Carousel>
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        onClick={() => { handleOpenModal(restaurant.place_id) }}
                        restaurant={restaurant}
                        key={restaurant.place_id}
                    />))}

            </Container>
            <MapContainer>
                <Map query={query} placeId={placeId} />
            </MapContainer>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
                <p>{restaurantSelected?.name}</p>
                <p>{restaurantSelected?.formatted_phone_number}</p>
                <p>{restaurantSelected?.formated_address }</p>
            </Modal>

        </Wrapper>
    );
}

export default Home;