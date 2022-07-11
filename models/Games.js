const { Schema } = require('mongoose')

const gamesSchema = new Schema({
    title:{
        type:String, required:true,
    },
   price:{type:Number, required:true},
  
   description:{type:String,required:true}
})