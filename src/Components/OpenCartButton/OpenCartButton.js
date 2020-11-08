import React from 'react'
import cartIcon from "./icons/shopping-cart.svg"
import MainDiv from './Style'

export default class OperCartButton extends React.Component {
    render() {
        return (
            <MainDiv>
                <button onClick={this.props.onClickAbrirCarrinho}><img src={cartIcon}/></button>
            </MainDiv>
        )
    }
}
