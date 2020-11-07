import styled from 'styled-components'
import backgroundImage from './img/space.jpg';

export const ProductContainer = styled.section`
    min-width: 60vw;
    max-width: 60vw;
    background: whitesmoke;
    background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${backgroundImage});
    background-size: cover;
    color:  #23C54A;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;