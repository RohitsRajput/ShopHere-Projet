const express = require("express");
const authcontroller = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/signup", authcontroller.registration);
authRouter.post("/login", authcontroller.login);
authRouter.get("/logout", authcontroller.logout);
authRouter.post("/admin-login", authcontroller.adminLogin);

module.exports = authRouter;
  