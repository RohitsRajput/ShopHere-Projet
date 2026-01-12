const User = require("../models/userModel");

exports.addToCart = async (req, res) => {
  try {

    const {itemId, size} = req.body;

    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).send("User not found");
    }

    const cartData = userData.cartData || {};

    if(cartData[itemId]) {
      if(cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      } 
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    
    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(200).send("Item added to cart successfully");
  }
  catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send("Add to Cart Error");
  }
}


exports.getCartItems = async (req, res) => {
   try {
       const { itemId, size, quantity } = req.body;
       const userData = await User.findById(req.userId);
       let cartData = userData.cartData;

       cartData[itemId][size] = quantity;
        await User.findByIdAndUpdate(req.userId, { cartData });
        return res.status(200).send("Cart updated successfully");
  }
  catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send("update cart  Error");
  }
}

exports.getUserCart = async (req, res) => {
   try {
    const userData = await User.findById(req.userId);
    let cartData = await userData.cartData;
    return res.status(200).json(cartData);
  } catch (error) { 
    console.error("Error fetching user cart:", error);
    res.status(500).send("get user cart Error");
  }
}
