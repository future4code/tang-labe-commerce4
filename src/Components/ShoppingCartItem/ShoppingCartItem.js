import React, { Component } from 'react'
import styled from "styled-components"
import MainDiv from "../ShoppingCartItem/Styled.js"



export default class ShoppingCartItem extends Component {
    render() {
        return (
            <MainDiv>
                {this.props.quantidade}X | {this.props.name}: R${this.props.price}
                <span id={"RemoveItemButton"} onClick={this.props.onClickX}>X</span>
            </MainDiv>
        )
    }
}
