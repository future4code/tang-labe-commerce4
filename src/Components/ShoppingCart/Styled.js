import styled from 'styled-components'

const MainDiv = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    align-items: center;
    min-width: 200px;
    width: 20vw;
    height: 100vh;
    padding: 8px;

    position: fixed;
    right: 0;

    background-color: rgb(0, 0, 0, 0.8);

 #ItensList {
    list-style: none;
    padding: 0;
    margin: 0;
 }
 #TotalComponent{
    font-weight: bold;
}
`
export default MainDiv; 
