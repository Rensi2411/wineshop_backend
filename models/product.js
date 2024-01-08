const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String},
    productPic: {type: String, default: "https://images.unsplash.com/photo-1675974943343-e1e64fa62dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
    price: {type: Number},
    category: {type: String},
    createdAt: {type: String, default: Date.now()}
})



const ProductModel = mongoose.model("product", productSchema);



module.exports = ProductModel;