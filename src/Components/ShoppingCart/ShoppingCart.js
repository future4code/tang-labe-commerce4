import React, { Component } from 'react'
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem.js'
import MainDiv from "../ShoppingCart/Styled.js"




export default class ShoppingCart extends Component {




    render() {

    return (
            <MainDiv>
                <h2>Carrinho:</h2>
                <ul id={"ItensList"}>
                    {this.props.shoppingCartList.map(item => {                  
                        return  <ShoppingCartItem
                            name={item.name}
                            price={item.price * item.quantidade}
                            onClickX={() => this.props.onClickX(item)}
                            quantidade={item.quantidade}
                            ></ShoppingCartItem>
                    })}

                </ul>

            <p id={"TotalComponent"}>
                Total: R${this.props.shoppingCartList.reduce((total,item) => {
                   return total+= item.price*item.quantidade;
                }, 0)}
            </p>

            </MainDiv>
        )
    }
}
