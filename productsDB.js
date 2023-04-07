require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");

const ProductData = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    await Product.deleteMany();
    await Product.create(ProductData);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
