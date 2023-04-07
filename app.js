require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
const product_route = require("./routes/products");

app.get("/", (req, res) => {
  res.send("i m noob");
});

//middlware or set to route
app.use("/api/products", product_route);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(PORT, () => {
      console.log(`${PORT} successfully connect`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// X9QY1ES4jIaQvzq6  Cluster0

// mongodb+srv://<username>:<password>@cluster0.b7awdpl.mongodb.net/?retryWrites=true&w=majority
