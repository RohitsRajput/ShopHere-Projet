const express = require("express");
const usercontroller = require("../controllers/userController");
const authMiddleware = require("../middleware/isAuth");
const adminAuth = require("../middleware/adminAuth");
const userRouter = express.Router();

userRouter.post("/current-user", authMiddleware, usercontroller.currentUser);
userRouter.post("/getadmin", adminAuth, usercontroller.adminUser);

module.exports = userRouter;
  