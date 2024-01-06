const mongoose = require("mongoose") ;

const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/pint2")

const postSchema = mongoose.Schema({
 user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
 },
  title: String,
  description: String,
  image: String


})


module.exports = mongoose.model("post" , postSchema) ;