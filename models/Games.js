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
    clearance:{type:String },
    img :String,

//    avata:{
//     type: String
//    },
//    cloudinary_id: String,
//    name:{
//     type:String,
//    }

})
module.exports = mongoose.model('Games',gamesSchema)