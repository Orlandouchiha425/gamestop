// const { json } = require('express');
const Order = require('../../models/order')


//A cart is the unpaid order for a User
async function cart(req, res) {
    try{
        const cart = await Order.getCart(req.user._id);
        res.status(200).json(cart)
    }catch(e){
        res.status(400).json({message: e.message})
    }
}


//add item to the cart

async function addToCart(req,res){
try{ 
    const cart = await Order.getCart(req.user._id);
    await cart.addGameToCart(req.params.id)
    res.status(200).json(cart)
}catch(e){
    res.status(400).json({msg: e.message})
}
}

// Updates an item's qty in the cart

async function setItemQtyInCart(req,res){
    try{
        const cart = await Order.getCart(req.user._id)
        await cart.setGameQty(req.body.gameId, req.body.newQty)
        res.status(200).json(cart)
    }catch(e){
        res.status(400).json({msg: e.message })
    }
}

///update the carts is paid property to True

async function checkout(req, res) {
    try{
        const cart = await Order.getCart(req.user._id)
        cart.isPaid = true
        await cart.save()
        res.status(200).json(cart)
    }catch(e){
        res.status(400).json({msg : e.message})
    }

}

async function history(req, res) {
      // Sort most recent orders first
        try
        {
            const orders = await Order
            .find({ user: req.user._id, isPaid:true})
            .sort('-updatedAt').exec()
            res.status(200).json(orders)
        }catch(e){
            res.status(400).json({ msg: e.message})
        }
    
}

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    history
  };
  