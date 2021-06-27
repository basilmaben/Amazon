import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'

function Checkout(){

    const [{basket}] = useStateValue();

    return(
        <div className = "checkout">
            <div className = "checkout_left">
                {
                    basket.length === 0 ? (
                        <div>
                             <h2 className = "checkout_title">Your Cart is empty</h2>
                                <p>You dont have items in your cart</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className = "shoppingbaskettitle">Items in the Shopping Cart</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                        id = {item.id}
                                        title = {item.title}
                                        image = {item.image}
                                        price = {item.price}
                                        rating = {item.rating}
                                    />
                                ))
                            }
                        </div>
                    )
                }

                
            </div>
            <div className = "checkout_right">
                <Subtotal/>

            </div>


        </div>
    )
}

export default Checkout