import styled from 'styled-components'

const MainDiv = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    align-items: center;
    min-width: 200px;
    width: fit-content;
    height: 100vh;
    padding: 8px;

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
