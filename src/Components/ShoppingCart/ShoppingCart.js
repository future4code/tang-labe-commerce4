import React, { Component } from 'react'
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem.js'
import MainDiv from "../ShoppingCart/Styled.js"



const arrayteste = [
    {name: "Item 1",
    price: 3.00,
    quantidade: 1},
    {name: "Item 2",
    price: 4.00,
    quantidade: 1},
    {name: "Item 3",
    price: 5.00,
    quantidade: 1},
    {name: "Item 1",
    price: 3.00,
    quantidade: 1},
    {name: "Item 1",
    price: 3.00,
    quantidade: 1},
    {name: "Item 3",
    price: 5.00,
    quantidade: 1},
    {name: "Item 4",
    price: 10.00,
    quantidade: 1}

]

const countedItensArray = arrayteste.map((object,index,array) => {
    let acc = 0;  
    array.map(item => {
        if (object.name === item.name) {
            acc++
        } 
    })

    return {...object, quantidade: acc}
    

}) // Conta os itens repetidos e define as quantidades.


const sortedArray = countedItensArray.sort((a,b) => {
    if (a.name < b.name) {
            return -1
    } else if (a.name > b.name) {
            return 1
    }

    return 0
}); // Ordena o array conforme o nome do item preparando-o para a função seguinte.

       
const arrayReduced = sortedArray.reduce((init, current) => {
    if (init.length === 0 || init[init.length - 1].name !== current.name) {
            init.push(current);
    } // Remove os items repetidos do array.

    return init;
}, []);

export default class ShoppingCart extends Component {
    state = {
        itensList: arrayReduced
    }

    onClickX = (id) => {
        this.state.itensList.map((item, index) => {
            if(item.name === id) {
                this.state.itensList.splice(index,1);
            }
        return  this.setState({itensList: this.state.itensList})
        })
       console.log("clicado")
       }

    render() {

    return (
            <MainDiv>
                <h2>Carrinho:</h2>
                <ul id={"ItensList"}>
                    {this.state.itensList.map(item => {                     
                        return  <ShoppingCartItem
                            name={item.name}
                            price={item.price * item.quantidade}
                            onClickX={() => this.onClickX(item.name)}
                            quantidade={item.quantidade}
                            ></ShoppingCartItem>
                    })}

                </ul>

            <p id={"TotalComponent"}>
                Total: R${this.state.itensList.reduce((total,item) => {
                   return total+= item.price*item.quantidade;
                }, 0)}
            </p>

            </MainDiv>
        )
    }
}
