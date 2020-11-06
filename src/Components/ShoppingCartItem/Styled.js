import styled from 'styled-components'

const MainDiv = styled.li ` 
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px black dashed;
    margin: 10px 0;
    padding: 5px 0;
    list-style: none;


#RemoveItemButton {
    font-weight: bold;
    background-color: white;
    border: none;
    margin: 0 12px; 
}
#RemoveItemButton:hover {
        color: red;
    }
`
export default MainDiv;