const mongoose = require("mongoose");



const authSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    role: {type: String, default: "user"},
    address: {
            mobileNumber:{type :String, default: ""},
            whatsappNumber:{type :String, default: ""},
            country:{type :String, default: ""},
            state:{type :String, default: ""},
            city:{type :String, default: ""},
            pinCode:{type :String, default: ""},
            homeAddress:{type :String, default: ""}
        }
})



const AuthModel = mongoose.model("user", authSchema);



module.exports = AuthModel;