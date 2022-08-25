require("dotenv").config();
const helper = require('./hrapi.js');

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("client/dist"));
app.use(express.json());

let queryParams = {
  product_id: 65631,
  page: 1,
  count: 6
}

let pathVariable = {
  question_id: 593338
}

helper.getProductInfo('qa/questions', pathVariable.question_id, 'answers')
  .then((response) => {
    console.log("data from api: ", response.data);
  })
  .catch((err) => {
    console.log("something went wrong: ", err);
  })

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);