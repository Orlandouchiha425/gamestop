const mongoose = require('mongoose')
const Schema =mongoose.Schema;
const gamesSchema = require('./Games')

const gameItemSchema = new Schema({
    qty:{ type:Number, default:1},
    gameItem: gamesSchema
},{
    timestamps:true,
    toJSON:{virtuals: true}
})

gameItemSchema.virtual('extPrice').get(function(){
    //this will be in the total page/cart
    return this.qty * this.gameItem.price;
})



const gamePaidSchema = new Schema({
    user:{type: Schema.Types.ObjectId, ref:'User'},
    allGameItems:[gameItemSchema],
    isPaid:{ type:Boolean, default:false}
},{
    timestamps:rue,
    toJSON:{virtuals: true}
});

gamePaidSchema.virtual('orderTotal').get(function(){
    return this.allGameItems.reduce((total,game) => total + game.extPrice, 0);
})

gamePaidSchema.virtual('totalQty').get(function(){
    return this.allGameItems.reduce((total, game) => total + game.qty)
})

gamePaidSchema.virtual('orderId').get(function(){
    return this.id.slice(-4).toUppercase()
})

//getCart(req.params.id)
gamePaidSchema.statics.getCart = function(userId){
    //'this' is the order model

    return this.findOneAndUpdate(
        //query
        {user: userId, isPaid:false },
        //update
        {user:userId },
        //Upsert option will create the doc it it doesnt exist
        {upsert:true, new:true}
    )
}

gamePaidSchema.methods.addGameToCart = async function(gameId){
    const cart =this
    //check it item already in cart
    const gameItems = cart.gameItem.find(gameItems => gameItems._id.equals(gameId));
    if(gameItems){
        gameItems.qty +=1;
    }else{
        //below is fetchiing ./Games.js
        const gameItemFetch =await mongoose.model('Games').findById(gameId);
        cart.gameItems.push({ gameItemFetch })
    }
    return cart.save()

}

//Instance method to set an items ty in the cart(will add item if does not exists)

gamePaidSchema.methods.setGameQty = function (gameId, newQty) {
        // this keyword is bound to the cart (order doc)
        const gameItemFetch = cart.gameItem.find(gameItemFetch => gameItemFetch.gameItems._id.equals(gameId))
        if(gameItemFetch && newQty <=0){
            //calling remove, removes itself from the cart.gameItem array
            gameItemFetch.remove();
        }else if(gameItemFetch){
            //set the new qty -postivie value is assure because of previ if
            gameItemFetch.qty =newQty
        }
        // return the save() methods promise
        return cart.save()
}

module.exports = mongoose.model('Order',gamePaidSchema)