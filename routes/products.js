const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getTestingProduct,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getTestingProduct);

module.exports = router;
