const jwt = require("jsonwebtoken");

exports.generateToken = async (userId) => {
  try {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    throw new Error("Token generation failed");
  }
};

exports.generateToken1 = async (email) => {
  try {
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    throw new Error("Token generation failed");
  }
};
