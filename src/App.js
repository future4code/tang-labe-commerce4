import React, { Component } from 'react'
import Filters from "./Components/Filters/Filters"
import Products from "./Components/Products/Products"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import {AppContainer} from "./Styled"

import './App.css';

export default class App extends Component {
  state = {
    shoppingCartList: [],
  }




  render() {
    return (
      <AppContainer>
        <Filters></Filters>
        <Products></Products>
        <ShoppingCart></ShoppingCart>
      </AppContainer>
    )
  }
}
