import * as ordersAPI from "../../utilities/apiRoutes/orders-api"

export default function NewOrderPage({user, setUser}) {
    const [cart, setCart] =useState(null)

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


}