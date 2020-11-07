import React, { Component } from 'react'
import Filters from "./Components/Filters/Filters"
import Products from "./Components/Products/Products"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import { AppContainer } from "./Styled"

import './App.css';


export default class App extends Component {
  // state = {
  //   shoppingCartList: [],
  // }

  //meu state MÁRNAND
  state = {
    products: [
      {
        image: 'https://picsum.photos/id/1/200/200',
        title: 'Item J',
        price: 156.05
      },
      {
        image: 'https://picsum.photos/id/2/200/200',
        title: 'Item A',
        price: 67.10
      },
      {
        image: 'https://picsum.photos/id/3/200/200',
        title: 'Item H',
        price: 201.99
      },
      {
        image: 'https://picsum.photos/id/4/200/200',
        title: 'Item C',
        price: 102.05
      }
    ],

    valorMax: "",
    valorMin: "",
    nomeProduto: ""
  }

  valorMax = (event) => {
    this.setState({ valorMax: event.target.value })
  };

  valorMin = (event) => {
    this.setState({ valorMin: event.target.value })
  };

  nomeProduto = (event) => {
    this.setState({ nomeProduto: event.target.value })
  };

  render() {

    return (
      <AppContainer>
        <Filters
          filtroMax={this.state.valorMax}
          filtroMin={this.state.valorMin}
          filtroNome={this.state.nomeProduto}
          onChangeFiltroMax={this.valorMax}
          onChangeFiltroMin={this.valorMin}
          onChangeFiltroNome={this.nomeProduto}
        />
        <Products
          lista={this.state.products}
          filtroMax={this.state.valorMax}
          filtroMin={this.state.valorMin}
          filtroNome={this.state.nomeProduto}
        />
        <ShoppingCart></ShoppingCart>
      </AppContainer>
    )
  }
}
