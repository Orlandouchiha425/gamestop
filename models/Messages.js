const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    title: {type:String , required:true},
    post: {type:String, required:true},
    pros: {type:String},
    cons: {type:String},
    rating:Number,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Messages',messageSchema)