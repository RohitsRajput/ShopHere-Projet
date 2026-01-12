const express = require("express");

const cartController = require("../controllers/cartController");
const isAuth = require("../middleware/isAuth");

const cartRoute = express.Router();

cartRoute.post("/add", isAuth, cartController.addToCart);
cartRoute.post("/update", isAuth, cartController.getCartItems);
cartRoute.get("/userCart", isAuth, cartController.getUserCart);

module.exports = cartRoute;
    