import React, { useState } from "react";
import { Container, Search, Logo, Wrapper, Map, CarrouselTitle, Carousel } from './styles';
import logo from "../../assets/logo.svg"
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import theme from '../../theme';
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Maps } from '../../components';
const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
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
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarrouselTitle theme={theme}>Na sua área</CarrouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="sei lá" />
                        <Card photo={restaurante} title="sei lá" />
                        <Card photo={restaurante} title="sei lá" />
                        <Card photo={restaurante} title="sei lá" />
                        <Card photo={restaurante} title="sei lá" />
                        <Card photo={restaurante} title="sei lá" />
                        <Card photo={restaurante} title="sei lá" />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
         {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>*/}
         <Maps/>
        </Wrapper>
    );
}

export default Home;