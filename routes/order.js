const express = require("express");
const requireLogin = require("../middlewares/requireLogIn");
const { sendOrderFun, getUserOrder, getAllOrder } = require("../controllers/order");
const orderRouter = express.Router();



orderRouter.get("/all-order", requireLogin, getAllOrder);
orderRouter.get("/user-order", requireLogin, getUserOrder);
orderRouter.post("/send-order", requireLogin, sendOrderFun);



module.exports = orderRouter;