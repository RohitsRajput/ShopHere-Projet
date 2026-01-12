const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).json({ message: "invalid token" });
    }

    req.adminEmail = process.env.ADMIN_EMAIL;
    next();
  } catch (err) {
    return res.status(403).json({ message: `adminAuth  error ${err}` });
  }
};
module.exports = adminAuth;
