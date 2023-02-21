const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gamesSchema = new Schema({
    title:{
        type:String, required:true,
    },
   price:{type:Number, required:true},
  
   description:{type:String,required:true},
   genre:{type:String, required:true},
    platform:{type:String, required:true},
    clearance:{type: Boolean },
    img :String,
    pokemon:Boolean,
},
{
    timestamps: true
})
module.exports = mongoose.model('Games',gamesSchema)