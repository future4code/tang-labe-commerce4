import React, { Component } from 'react'
import styled from "styled-components"
import MainDiv from "../ShoppingCartItem/Styled.js"
import lixeira from './icon/lixeira.svg'



export default class ShoppingCartItem extends Component {
    render() {
        return (
            <MainDiv>
                {this.props.quantidade}X | {this.props.name}: R${this.props.price}
                <span id={"RemoveItemButton"} onClick={this.props.onClickX}><img src={lixeira} /></span>
            </MainDiv>
        )
    }
}
