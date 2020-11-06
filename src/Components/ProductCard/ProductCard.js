import React, { Component } from 'react'
import {Card} from './Styled'


export default class ProductCard extends Component {

    render() {
        return (
            <Card>
                <img src={this.props.imagem} alt="" />
                <p>{this.props.produto}</p>
                <p><strong>{this.props.preco}</strong></p>
                <button>Adicionar ao carrinho</button>
            </Card>
        )
    }
}