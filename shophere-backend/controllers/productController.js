const uploadCloud = require("../config/cloudnary");
const Product = require("../models/productModel");

// ===================== ADD PRODUCT =====================

exports.addProduct = async (req, res) => {
  try {
    let { name, description, price, category, subCategory, sizes, bestseller } =
      req.body;

    console.log("FILES:", req.files);   

    const image1 = await uploadCloud(req.files.image1[0].path);
    const image2 = await uploadCloud(req.files.image2[0].path);
    const image3 = await uploadCloud(req.files.image3[0].path);
    const image4 = await uploadCloud(req.files.image4[0].path);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes || "[]"),
      bestseller: bestseller === "true",
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);
    res.status(201).json(product);
  } catch (error) {
    console.error("Add product error:", error);
    res.status(500).json({ message: error.message });
  }
};


exports.productList = async (req, res, next) => {
  try {
    const productlists = await Product.find({});
    res.status(200).json(productlists);
  } catch (err) {
    console.error(" product list error:", err);
    res.status(500).json({ message: err.message || "product list error" });
  }
};

exports.productRemove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productRemoves = await Product.findByIdAndDelete(id);
    return res.status(200).json(productRemoves);
  } catch (error) {
    console.error("product remove error:", error);
    res.status(500).json({ message: error.message || "product remove error" });
  }
};
