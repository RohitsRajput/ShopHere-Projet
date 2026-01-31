const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoutes");

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://your-frontend.onrender.com", // add later
    ],
    credentials: true,
  }),
);

/* ===== ROUTES ===== */
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);

/* ===== TEST ROUTE ===== */
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

/* ===== ENV ===== */
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

/* ===== DB + SERVER ===== */
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
