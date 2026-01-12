const User = require("../models/userModel");

exports.currentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Fetch current user error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.adminUser = async (req, res, next) => {
  try {
    const adminEmail = req.adminEmail;
    if (!adminEmail) {
      return res.status(404).json({ message: "admin not found" });
    }
    return res.status(200).json({ email: adminEmail, role: "admin" });
  } catch (error) {
    console.error("Fetch admin user error:", error);
    return res.status(500).json({ message: "Server error" });
  } 
};
