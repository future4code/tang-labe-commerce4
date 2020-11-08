import React, { Component } from 'react'
import {Card} from './Styled'


export default class ProductCard extends Component {

    render() {
        return (
            <Card>
                <img src={this.props.imagem} alt="" />
                <p>{this.props.produto}</p>
                <p><strong>R${this.props.preco}</strong></p>
                <button onClick={this.props.onClickBotao}>ADICIONAR AO CARRINHO</button>
            </Card>
        )
    }
}