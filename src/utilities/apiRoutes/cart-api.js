import { sendRequest } from "../users/send-request";
 
const BASE_URL = '/api/cart'

//Retrieve an unpaid order for the logged user

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`)
}

//add an item to the cart
export function addGameToCart(game){
    //just send item/game for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/`)
}