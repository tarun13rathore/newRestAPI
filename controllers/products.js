const { query } = require("express");
const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, feature, sort, select } = req.query;
  const queryObject = {};

  //search
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (feature) {
    queryObject.feature = feature;
  }

  let apiData = Product.find(queryObject);

  //sort
  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  //select
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  //pagination
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log("req.query", queryObject);
  const getData = await apiData;

  res.status(200).json({ getData, nbHits: getData.length });
};

const getTestingProduct = async (req, res) => {
  console.log("req.query", req.query);
  const getData = await Product.find(req.query);
  console.log("req.query", req.query);
  res.status(200).json({ getData });
};

// const getTestingProduct = async (req, res) => {
//   const getData = await Product.find(req.query).select("name rating");
//   console.log("req.query", req.query);
//   res.status(200).json({ getData });
// };

module.exports = { getAllProducts, getTestingProduct };
