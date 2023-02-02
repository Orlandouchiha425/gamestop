import { useState,useEffect } from "react"
import {Link, useNavigate} from "react-router-dom"
import * as ordersAPI from "../../../utilities/apiRoutes/orders-api"
import Onegame from "../../Onegame/Onegame"

export default function NewOrderFunctions({user, setUser}) {
    const [cart, setCart] =useState(null)
    const navigate = useNavigate

    async function handleAddToOrder(itemId) {
        //AddgameTo Cart function is the function created in orders-api folder
        const updatedCart = await ordersAPI.addGameToCart(itemId)
        //we set , setcart to updated cart we fetched from orders-api
        setCart(updatedCart)
        
    }
 async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId,newQty)
    setCart(updatedCart)
}


async function handleCheckOut() {
    await ordersAPI.checkout;
    navigate('/orders')
    
}
<Onegame handleAddToOrder={handleAddToOrder} />


}