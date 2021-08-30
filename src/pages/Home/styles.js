import styled from "styled-components";
import Slider from "react-slick";


export const Wrapper = styled.div`
display: flex;
`;

export const Container = styled.aside`
background-color: ${(props) => props.theme.colors.background};
width: 360px;
height: 100vh;
overflow-y: auto;
flex: 1;
`;

export const Search = styled.section`
background-color: #ffffff;
padding: 16px;
flex-direction: column;
display: flex;
`;

export const Logo = styled.img`
margin-bottom: 15px;
`;

export const MapContainer = styled.div`
flex: 3;
`;

export const Carousel = styled(Slider)`
.slick-slide{
    margin-right: 30px;
}
`;

export const CarrouselTitle = styled.h1`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin: 16px 0px;
`;


