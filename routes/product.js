const express = require("express");
const { addProduct, getAllProduct, updateProduct, deleteProduct, getSingleProduct, getAllProductsAdmin } = require("../controllers/product");
const requireLogin = require("../middlewares/requireLogIn");
const adminAccess = require("../middlewares/adminAccess");
const productRouter = express.Router();


productRouter.post("/add-product", adminAccess, addProduct);
productRouter.get("/products-admin", adminAccess, getAllProductsAdmin); //admin-
productRouter.get("/products", getAllProduct);
productRouter.get("/product/:_id", getSingleProduct);
productRouter.patch("/update-product/:_id", adminAccess, updateProduct);
productRouter.delete("/delete-product/:_id", adminAccess, deleteProduct);



module.exports = productRouter;