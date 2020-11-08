import React, { Component } from 'react'
import Filters from "./Components/Filters/Filters"
import Products from "./Components/Products/Products"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import {AppContainer} from "./Styled"
import milleniumFalcon from './Components/Products/img/milleniumFalcon.png'
import endurance from './Components/Products/img/endurance.jpg'
import enterprise from './Components/Products/img/enterprise.jpg'
import planetExpress from './Components/Products/img/planetExpress.jpg'
import normandy from './Components/Products/img/normandy.png'
import starDestroyer from './Components/Products/img/starDestroyer.jpg'
import tieFigther from './Components/Products/img/tieFigther.jpg'
import xWing from './Components/Products/img/xWing.jpg'

import './App.css';

export default class App extends Component {
  state = {
    shoppingCartListApp: [],

  produtos: [
    {
        nomeProduto: "Millenium Falcon",
        preco: 120000000.00,
        imagem: milleniumFalcon
    },
    {
        nomeProduto: "Endurance",
        preco: 20000000.00,
        imagem: endurance
    },
    {
        nomeProduto: "Enterprise",
        preco: 200000000.00,
        imagem: enterprise
    },
    {
        nomeProduto: "Planet Express",
        preco: 60000000.00,
        imagem: planetExpress
    },
    {
        nomeProduto: "Normandy",
        preco: 550000000.00,
        imagem: normandy
    },
    {
        nomeProduto: "Star Destroyer",
        preco: 1200000000.00,
        imagem: starDestroyer
    },
    {
        nomeProduto: "Tie Fighter",
        preco: 4000000.00,
        imagem: tieFigther
    },
    {
        nomeProduto: "X-Wing",
        preco: 9000000.00,
        imagem: xWing
    }]
  }



onClickBotao = (nome) => {
  let novoProduto = {};

   let novoArray = this.state.produtos.map( element => {
           if (nome === element.nomeProduto) {
            return novoProduto = {name: element.nomeProduto,
                         price: element.preco,
                         quantidade: 1}
          }
        })
        
        novoArray = [ novoProduto, ...this.state.shoppingCartListApp ]
        
       
  

this.setState({shoppingCartListApp: novoArray})

}

onClickX = (item) => {
  let novoArray = this.state.shoppingCartListApp.filter(elemento => {
      if(elemento.name !== item.name) {
         return {...elemento.name}
      }
  })

  this.setState({shoppingCartListApp: novoArray})
 }

  render() {

    let countedItensArray = this.state.shoppingCartListApp.map((object,index,array) => {
      let acc = 0;  
      array.map(item => {
          if (object.name === item.name) {
              acc++
          } 
      })
  
      return {...object, quantidade: acc}
      
  
  }) // Conta os itens repetidos e define as quantidades.
  
  
let  sortedArray = countedItensArray.sort((a,b) => {
      if (a.name < b.name) {
              return -1
      } else if (a.name > b.name) {
              return 1
      }
  
      return 0
  }); // Ordena o array conforme o nome do item preparando-o para a função seguinte.
  
         
 let arrayReduced = sortedArray.reduce((init, current) => {
      if (init.length === 0 || init[init.length - 1].name !== current.name) {
              init.push(current);
      } // Remove os items repetidos do array.

      return init;
  }, []);

    console.log(this.state.shoppingCartListApp)
    return (
      <AppContainer>
        <Filters></Filters>
        <Products
        produtos={this.state.produtos}
        onClickBotao={(nome) => this.onClickBotao(nome)}></Products>
        <ShoppingCart onClickX={(item) => this.onClickX(item)} shoppingCartList={arrayReduced}></ShoppingCart>
      </AppContainer>
    )
  }
}
