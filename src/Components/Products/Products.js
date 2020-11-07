import React, { Component } from 'react'
import { ProductContainer } from './Styled'

export default class Products extends Component {

  getFiltros = () => {
    return this.props.lista
      .filter((product) => this.props.filtroMax ? product.price < this.props.filtroMax : true)
      .filter((product) => this.props.filtroMin ? product.price > this.props.filtroMin : true)
      .filter((product) => this.props.filtroNome ? product.title.includes(this.props.filtroNome) : true)
  }

  render() {
    const filtros = this.getFiltros()

    return (
      <ProductContainer>

        {filtros.map((product) => {
          return (
            <div>
              <img src={product.image} /><br />
              {product.title}<br />
              R$ {product.price}
            </div>
          )
        })}

      </ProductContainer>
    )
  }
}
