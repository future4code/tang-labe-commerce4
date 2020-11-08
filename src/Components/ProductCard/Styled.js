import styled from 'styled-components'

export const Card = styled.div`
    background: #0A0A0A;
    border-width: 4px;
    border-style: none;
    border-color: #23C54A;
    border-radius: 10px;
    max-width: 300px;
    margin: 16px;
    box-shadow: 2px 2px 20px 0px skyblue;
    &:hover {
        img {
            filter: contrast(100%)
        }
    }
    img {
        width: 100%;
        height: 200px;
        filter: contrast(80%);

        border-radius: 10px 10px 0 0;
    }
    p {
        margin-left: 16px;
    }
    button {
        width: 100%;
        height: 50px;
        border: 4px solid;
        color: #23C54A;
        background-color: #1A1A1A;
        font-weight: 700;
        font-size: 16px;
        position: relative;

        cursor: pointer;
    }
    button::before, button::after {
        content: '';
        position: absolute;
        width: 14px;
        height: 4px;
        background: #262626;
        color: #2991FA;
        transform: skewX(50deg);
        transition: .25s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    button:hover{
        animation-name: mudaCor;
        animation-duration: .3s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
    button::before {
        top: -4px;
        left: 10%; 
    }
    button::after {
        bottom: -4px;
        right: 10%; 
    }
    button:hover::before {
        left: 80%;
    }
    button:hover::after {
        right: 80%; 
    }
    @keyframes mudaCor {
        from{color: #23C54A;}
        to{color: #2991FA;}
    }
    button:active {
        color: #FFD359 !important;
    }
`;

