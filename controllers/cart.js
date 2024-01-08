const CartModel = require("../models/cart");


const getCart = async (req, res) => {
    try{
        const userGmail = req.headers.authorization;

        const getItems = await CartModel.find({userGmail});
        return res.status(201).json({getItems})
    }
    catch(error){
        return res.status(401).json({error: "OOP's something is wrong, product not found"})
    }
}


const addCart = async (req, res) => {
    try{
        const userGmail = req.headers.authorization;
        const payload = req.body;

        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (3600000*+5.5));
        let ist =  nd.toLocaleString();

        const product = CartModel({...payload, userGmail, createdAt: ist});
        await product.save();
        return res.status(201).json({message: "Product added successfully"})
    }
    catch(error){
        return res.status(401).json({error: "OOP's something is wrong, product not added"})
    }
}


const updateCart = async (req, res) => {
    try{
        const {_id} = req.params;
        let {newQ} = req.body;
        await CartModel.findByIdAndUpdate({_id}, {quantity: newQ});
        return res.status(201).json({message: "Successfully updated"})
    }
    catch(error){
        console.log(error)
        return res.status(401).json({error: "OOP's something is wrong, product not updated"})
    }
}


const deleteCart = async (req, res) => {
    try{
        const {_id} = req.params;
        await CartModel.findByIdAndDelete({_id});
        return res.status(201).json({message: "Successfully deleted"})
    }
    catch(error){
        console.log(error);
        return res.status(401).json({error: "OOP's something is wrong, product not deleted"})
    }
}


const deleteAllCart = async (req, res) => {
    try{
        const userGmail = req.headers.authorization;
        await CartModel.deleteMany({userGmail});
        return res.status(201).json({message: "Successfully deleted all"})
    }
    catch(error){
        console.log(error);
        return res.status(401).json({error: "OOP's something is wrong, product not deleted"})
    }
}



module.exports = {getCart, addCart, updateCart, deleteCart, deleteAllCart}