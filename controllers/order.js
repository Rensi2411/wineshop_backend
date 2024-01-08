const OrderModel = require("../models/order");

const sendOrderFun = async (req, res) => {
    try{
        const order =  OrderModel(req.body);
        await order.save();
        return res.status(201).json({message: "Successfully updated", order})
    }
    catch(error){
        console.log(error);
        return res.status(401).json({error: "OOP's something is wrong, product not updated"})
    }
}


const getUserOrder = async (req, res) => {
    try{
        const userGmail = req.headers.authorization;
        const getItems = await OrderModel.find({email: userGmail});
        return res.status(201).json({getItems})
    }
    catch(error){
        return res.status(401).json({error: "OOP's something is wrong, product not found"})
    }
}


const getAllOrder = async (req, res) => {
    try{
        const getItems = await OrderModel.find();
        return res.status(201).json({getItems})
    }
    catch(error){
        return res.status(401).json({error: "OOP's something is wrong, product not found"})
    }
}


module.exports = {sendOrderFun, getUserOrder, getAllOrder}