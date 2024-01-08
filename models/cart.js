const mongoose = require("mongoose");


const cartSchema = mongoose.Schema({
    name: {type: String},
    productPic: {type: String},
    quantity: {type: Number},
    price: {type: Number},
    category: {type: String},
    userGmail: {type: String},
    createdAt: {type: String}
})



const CartModel = mongoose.model("cart", cartSchema);



module.exports = CartModel;