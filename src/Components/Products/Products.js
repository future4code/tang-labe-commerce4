import React, { Component } from 'react'
import {ProductContainer, CardContainer} from './Styled'
import ProductCard from "../ProductCard/ProductCard";
import ProductHeader from '../ProductHeader/ProductHeader'

export default class Products extends Component {
    state = {
        produtos: this.props.produtos ,
        ordenacao: "Menor Preço"

    }
    
     getFiltros = () => {
       return this.props.produtos
      .filter((product) => this.props.filtroMax ? product.preco <= this.props.filtroMax : true)
      .filter((product) => this.props.filtroMin ? product.preco >= this.props.filtroMin : true)
      .filter((product) => this.props.filtroNome ? product.nomeProduto.toLowerCase().includes(this.props.filtroNome.toLowerCase()) : true)
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
        const filtros = this.getFiltros()
      
        const listaProdutos = filtros.map((element) => {
            return (
                <ProductCard
                imagem={element.imagem}
                produto={element.nomeProduto}
                preco={element.preco}
                onClickBotao={() => this.props.onClickBotao(element.nomeProduto)}
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
