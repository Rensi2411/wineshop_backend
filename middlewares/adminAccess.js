const AuthModel = require("../models/auth");

const adminAccess = async (req, res, next) => {
    const loggedInUserEmail = req.headers.authorization;

    if(!loggedInUserEmail){
        return res.status(401).json({error: "Please log in first"});
    }

    const user = await AuthModel.findOne({email: loggedInUserEmail})
    if(!user){
        return res.status(401).json({error: "You are not allow to access this resource"});
    }

    if(user.role !== "admin"){
        return res.status(401).json({error: "You are not allow to access this resource"});
    }

    next()
}

module.exports = adminAccess;