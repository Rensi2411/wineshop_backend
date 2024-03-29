const AuthModel = require("../models/auth");

const requireLogin = async (req, res, next) => {
    const loggedInUserEmail = req.headers.authorization;

    if(loggedInUserEmail === undefined || !loggedInUserEmail || !loggedInUserEmail === null){
        return res.status(401).json({error: "Please log in first"});
    }

    next()
}

module.exports = requireLogin;