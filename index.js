const express = require("express");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const app = express();
const cors = require("cors");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
require("dotenv").config();


app.use(express.json());
app.use(cors());


app.use("/api/v1", authRouter)
app.use("/api/v1", productRouter)
app.use("/api/v1", cartRouter)
app.use("/api/v1", orderRouter)


module.exports = app;