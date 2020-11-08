import styled from 'styled-components'

const MainDiv = styled.div `
border-radius: 50px;
position:fixed;
bottom: 20px;
right: 20px;
width: 80px;
height: 80px;

box-shadow: 2px 2px 20px 0px #23C54A; 
    border: 2px solid #23C54A;
:hover{
    box-shadow: 2px 2px 35px 0px skyblue;
border: 2px solid skyblue;
}

button{
    background-color: black;
    border-radius: 50px;
    border: none;
    width: 80px;
    height: 80px;
}

button:focus {
    outline: 1px dashed skyblue;
}
img {
    background-color:none;
}


`

export default MainDiv;