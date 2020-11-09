import React, { Component } from 'react'
import {ProductHead, Ordenador} from './Styled'


export default class ProductHeader extends Component {
    ordenacao = ["Maior Preço", "Menor Preço"]

    render() {
        const renderOpcoes = this.ordenacao.map((itemOpcao) => {
            return <option value={itemOpcao}>{itemOpcao}</option>
        })

        return (
            <ProductHead>
                <p>Quantidade de produtos: {this.props.quantidadeProdutos}</p>
                <Ordenador>
                    <label> Ordenar por: </label>
                    <select value={this.props.valueOrdem} onChange={this.props.onChangeOrdem}>
                        {renderOpcoes}
                    </select>
                </Ordenador>
            </ProductHead>
        )
    }
}
