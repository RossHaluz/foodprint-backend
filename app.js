const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const multer = require("multer");
dotenv.config();

const app = express();

//Routes
const authRoutes = require("./routes/authRoutes");
const billboardRoutes = require("./routes/billbordRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const characteristicRoutes = require("./routes/characteristicRoutes");
const lanquageRoutes = require("./routes/lanquageRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");
const deliveryInfoRoutes = require("./routes/deliveryInfoRoutes");
const paymentMethodRoutes = require("./routes/paymentMethodRoutes");
const faqRoutes = require("./routes/faqRoutes");
const orderRoutes = require("./routes/orderRoutes");

//Middlewars
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  exposedHeaders: "Content-Range,X-Content-Range",
  credentials: true,
  maxAge: 86400,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/billboard", billboardRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/characteristic", characteristicRoutes);
app.use("/api/lanquage", lanquageRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/user", userRoutes);
app.use("/api/delivery-info", deliveryInfoRoutes);
app.use("/api/payment-method", paymentMethodRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/order", orderRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({ message: "File size exceeds the limit" });
  }
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = {
  app,
};
