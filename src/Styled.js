import styled from 'styled-components'
import backgroundImage from './Components/Products/img/space.jpg';

export const AppContainer = styled.div`
    display: flex;

    color:  #23C54A;
    background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(${backgroundImage});
    background-size: cover;
`