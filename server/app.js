require("dotenv").config();
const helper = require('./hrapi.js');

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("client/dist"));
app.use(express.json());


//----------for testing only, will delete after testing----------------//
let queryParams = {
  product_id: 65656,
  page: 1,
  count: 10
  // sort: "newest"
}

// let pathVariable = 65656 //product_id
let pathVariable = 574069 //question_id

helper.getProductInfo('products', queryParams, '')
  .then((response) => {
    console.log("data from api: ", response.data);
  })
  .catch((err) => {
    console.log("something went wrong: ", err);
  })

// --------------------------------------------------------------------//

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);