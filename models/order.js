const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    products: [],
    paymentMethod: {type: String},
    status: {type: String, default: "Ordered"},
    shippingPrice: {type: Number},
    gst: {type: String},
    totalPrice: {type: Number},
    payableAmount: {type: Number},
    shippingInfo: {
            mobileNumber:{type :String, default: ""},
            country:{type :String, default: ""},
            state:{type :String, default: ""},
            city:{type :String, default: ""},
            pinCode:{type :String, default: ""},
            homeAddress:{type :String, default: ""}
        }
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel;