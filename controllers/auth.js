const AuthModel = require("../models/auth");
const bcrypt = require("bcrypt");
require("dotenv").config();


const register = async (req, res) => {
    try{
        const payload = req.body;
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(401).json({error: "Please fill all the details"});
        }

        const existingUser = await AuthModel.findOne({email})
        if(existingUser){
            return res.status(401).json({error: "User is already exist with this email address"});
        }

        const hashPassword = bcrypt.hashSync(password, 8);
        
        const saveUserData = await new AuthModel({...payload, password: hashPassword})
        await saveUserData.save();
        return res.status(201).json({message: "Successfully registered"});

    } 
    catch(error){
        console.log(error);
        return res.status(500).json({error: "Something is wrong, an internal error issue"});
    }
}


const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(401).json({error: "Please fill all the details"});
        }

        const existingUser = await AuthModel.findOne({email})
        if(!existingUser){
            return res.status(401).json({error: "User is not exist with this email address"});
        }

        const comparePassword = bcrypt.compareSync(password, existingUser.password);
        if(!comparePassword){
            return res.status(401).json({error: "Password is incorrect"});
        }

        if(existingUser.role === "admin"){
            let x = ("" + Math.random()).substring(2, 10);
            return res.status(201).json(
                {
                    message: "Successfully logged in",
                    user: {name: existingUser.name, email: existingUser.email, userId: x}
                }
            );
        }
        else if(existingUser.role === "co-admin"){
            let x = ("" + Math.random()).substring(2, 9);
            return res.status(201).json(
                {
                    message: "Successfully logged in",
                    user: {name: existingUser.name, email: existingUser.email, userId: x}
                }
            );
        }
        else{
            let x = ("" + Math.random()).substring(2, 8);
            return res.status(201).json(
                {
                    message: "Successfully logged in",
                    user: {name: existingUser.name, email: existingUser.email, userId: x}
                }
            );
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({error: "Something is wrong, an internal error issue"});
    }
}


const setAddress = async (req, res) => {
    try{
        const userGmail = req.headers.authorization;
        await AuthModel.findOneAndUpdate({email: userGmail}, {address: req.body})
        return res.status(201).json({message: "Address saved successfully"})
    }
    catch(error){
        console.log(error);
        return res.status(401).json({error: "Something is worng"});
    }

}


const getSingleUserData = async (req, res) => {
    try{
        const userGmail = req.headers.authorization;
        let userDetails = await AuthModel.findOne({email: userGmail}).select({password: 0, role: 0})
        return res.status(201).json({message: "Successfully get user profile", userDetails})
    }
    catch(error){
        console.log(error);
        return res.status(401).json({error: "Something is worng"});
    }
}


const getAllUser = async (req, res) => {
    try{
        const users = await AuthModel.find();
        return res.json({users})
    }
    catch(error){
        console.log(error);
        return res.status(401).json({error: "Something is worng"});
    }
}

module.exports = {register, login, getSingleUserData, setAddress, getAllUser};