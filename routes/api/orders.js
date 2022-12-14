const express = require('express')

const router = express.Router()
const {cart, addToCart, setItemQtyInCart,checkout,history} = require('../../controllers/api/orders')

//Get /api/orders/cart
router.get('/cart',cart);

router.get('/cart/qty',setItemQtyInCart)

//add an item to the cart
//This function is located in virtuals "../../models/order"
router.get('/cart/game/:id',addToCart)

// GET /api/orders/history
router.get('/history',history)

router.get('/cart/checkout',checkout)

module.exports = router;