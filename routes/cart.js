const express = require("express");
const requireLogin = require("../middlewares/requireLogIn");
const { addCart, getCart, deleteCart, updateCart, deleteAllCart } = require("../controllers/cart");
const cartRouter = express.Router();



cartRouter.get("/cart", requireLogin, getCart);
cartRouter.post("/add-cart", requireLogin, addCart);
cartRouter.patch("/update-cart/:_id", requireLogin, updateCart);
cartRouter.delete("/delete-cart/:_id", requireLogin, deleteCart);
cartRouter.delete("/delete-all-cart", requireLogin, deleteAllCart);


module.exports = cartRouter;