const express = require("express");

const productcontroller = require("../controllers/productController");
const upload = require("../middleware/multer");
const adminAuth = require("../middleware/adminAuth");
const productRoute = express.Router();

productRoute.post(
  "/addProduct",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  productcontroller.addProduct
);

productRoute.get("/list", productcontroller.productList);
productRoute.delete("/remove/:id", adminAuth, productcontroller.productRemove);

module.exports = productRoute;
