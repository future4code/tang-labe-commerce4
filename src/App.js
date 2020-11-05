import React, { Component } from 'react'
import Filters from "./Components/Filters/Filters"
import Products from "./Components/Products/Products"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"

import './App.css';

export default class App extends Component {
  state = {
    shoppingCartList: [],
  }




  render() {
    return (
      <div>
        <Filters></Filters>
        <Products></Products>
        <ShoppingCart></ShoppingCart>
      </div>
    )
  }
}
