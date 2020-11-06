import React, { Component } from 'react'
import {ProductContainer, CardContainer} from './Styled'
import ProductCard from "../ProductCard/ProductCard";
import ProductHeader from '../ProductHeader/ProductHeader'
import milleniumFalcon from './img/milleniumFalcon.png'
import endurance from './img/endurance.jpg'
import enterprise from './img/enterprise.jpg'
import planetExpress from './img/planetExpress.jpg'
import normandy from './img/normandy.png'
import starDestroyer from './img/starDestroyer.jpg'
import tieFigther from './img/tieFigther.jpg'
import xWing from './img/xWing.jpg'

export default class Products extends Component {
    state = {
        produtos: [
            {
                nomeProduto: "Millenium Falcon",
                preco: 120,//000000.00,
                imagem: milleniumFalcon
            },
            {
                nomeProduto: "Endurance",
                preco: 20,//000000.00,
                imagem: endurance
            },
            {
                nomeProduto: "Enterprise",
                preco: 200,//000000.00,
                imagem: enterprise
            },
            {
                nomeProduto: "Planet Express",
                preco: 60,//000000.00,
                imagem: planetExpress
            },
            {
                nomeProduto: "Normandy",
                preco: 550,//000000.00,
                imagem: normandy
            },
            {
                nomeProduto: "Star Destroyer",
                preco: 1200,//000000.00,
                imagem: starDestroyer
            },
            {
                nomeProduto: "Tie Fighter",
                preco: 4,//000000.00,
                imagem: tieFigther
            },
            {
                nomeProduto: "X-Wing",
                preco: 9,//000000.00,
                imagem: xWing
            }],
        ordenacao: "Menor Preço"
    }

    mudaOrdem = (event) => {
        this.setState({ordenacao: event.target.value})
        switch (this.state.ordenacao) {
            case "Menor Preço":
                const menorPrecoProdutos = this.state.produtos.sort((a, b) => b.preco - a.preco)
                return (
                    this.setState({produtos: menorPrecoProdutos})
                )
            case "Maior Preço":
                const maiorPrecoProdutos = this.state.produtos.sort((a, b) => a.preco - b.preco)
                return (
                    this.setState({produtos: maiorPrecoProdutos})
                )
            default:
                break;
        }
    }
    
    
    
    render() {
        const listaProdutos = this.state.produtos.map((element) => {
            return (
                <ProductCard
                imagem={element.imagem}
                produto={element.nomeProduto}
                preco={element.preco}
                />     
            )
        })

        const quantProdutos = listaProdutos.length
            
        return (
            <ProductContainer>
                <ProductHeader 
                    valueOrdem={this.state.ordenacao} 
                    onChangeOrdem={this.mudaOrdem} 
                    quantidadeProdutos={quantProdutos}
                />
                <CardContainer>
                    {listaProdutos}               
                </CardContainer>
            </ProductContainer>
        )
    }
}
