const { generateToken, generateToken1 } = require("../config/token");
const User = require("../models/userModel");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// ===================== REGISTRATION =====================

exports.registration = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save(); // You missed saving the user in DB

    const token = await generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ===================== LOGIN =====================

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid password" });
    }
    const token = await generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "login error" });
  }
};

// ===================== LOGOUT =====================

exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "logout successfull" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "logout error" });
  }
};

// ===================== ADMIN LOGIN =====================

exports.adminLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      console.log(email, password);
      let token = await generateToken1(email);
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.status(201).json(token);
    }
    return res.status(401).json({ message: "Invalid admin credentials" });
  } catch (error) {
    console.error("Admin Login error:", error);
    return res.status(500).json({ message: "Admin login error" });
  }
};
