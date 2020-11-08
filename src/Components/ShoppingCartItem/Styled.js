import styled from 'styled-components'

const MainDiv = styled.li` 
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px black dashed;
    margin: 10px 0;
    padding: 5px 0;
    list-style: none;

    #RemoveItemButton {
        font-weight: bold;
        border: none;
        margin: 0 12px; 

        cursor: pointer;

        opacity: 0.5;
    }
    #RemoveItemButton:hover {
        opacity: 1.0;
    }
        
`
export default MainDiv;