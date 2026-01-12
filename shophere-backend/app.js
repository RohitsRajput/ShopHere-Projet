const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoutes");

const MONGO_URI =
  "mongodb+srv://rohitsingh:shophere@cluster0.i5jkd5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const Port = 5000;

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true, // Allow cookies/auth headers
  })
);

app.use(authRouter);
app.use("/api/user", userRouter);
app.use('/product', productRoute);
app.use(cartRoute);

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(Port, () => {
      console.log(`Server running on address http://localhost:${Port}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to mongo", err);
  });
