const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    title: String,
    post: String,
    pros: String,
    cons: String,
    rating:Number,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Messages',messageSchema)