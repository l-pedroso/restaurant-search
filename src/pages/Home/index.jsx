import React, { useState } from "react";
import { Container, Search, Logo, Wrapper, CarrouselTitle, Carousel, MapContainer } from './styles';
import logo from "../../assets/logo.svg"
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import theme from '../../theme';
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';
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
                    {console.log(restaurants.lenght)}
                    {restaurants.length > 0 ? (
                        <>
                            <CarrouselTitle theme={theme}>Na sua área</CarrouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => (<Card
                                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                                    title={restaurant.name}
                                    key={restaurant.place_id}
                                />))}
                            </Carousel>
                        </>
                    ) : <Loader />}
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
                {restaurantSelected ? (
                    <>
                        <p size="large">{restaurantSelected?.name}</p>
                        <p size="medium">{restaurantSelected?.formatted_phone_number}</p>
                        <p size="medium">{restaurantSelected?.formatted_address}</p>
                        <p size="medium">
                            {restaurantSelected?.opening_hours?.open_now
                                ? 'Aberto agora :)'
                                : 'Fechado neste momento :('}
                        </p>
                    </>
                ) : (
                    <>
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                    </>
                )}
            </Modal>
        </Wrapper>
    );
}

export default Home;