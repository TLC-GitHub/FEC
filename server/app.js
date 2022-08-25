require("dotenv").config();
const helper = require('./hrapi.js');

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("client/dist"));
app.use(express.json());


//----------for testing only, will delete after testing----------------//
let queryParams = {
  // product_id: 65656,
  page: 1,
  count: 10
}

let bodyParams = {
  product_id: 65656,
  // body: "I am providing testing answer here here here!!!!!!!",
  // name: "answer",
  // email: "answer@gmail.com"
  rating: 4,
  summary: "summary of my review",
  body: "this is a review for testing testing testing",
  recommend: true,
  name: "testing testing testing",
  email: "testing@gmail.com",
  photos: [],
  characteristics: {}
}

// let pathVariable = 65656 //product_id
// let pathVariable = 574069 //question_id
// let pathVariable = 642691 //question_id
let pathVariable = 5987428 //answer_id

// helper.getInfo('products', queryParams)
//   .then((response) => {
//     console.log("data from api: ", response.data);
//   })
//   .catch((err) => {
//     console.log("something went wrong: ", err);
//   })

// helper.postInfo('reviews', bodyParams)
//   .then((response) => {
//     console.log("data from api: ", response.data);
//   })
//   .catch((err) => {
//     console.log("something went wrong: ", err);
//   })

  // helper.updateInfo('qa/answers', pathVariable, 'helpful')
  // .then((response) => {
  //   console.log("data from api: ", response.data);
  // })
  // .catch((err) => {
  //   console.log("something went wrong: ", err);
  // })
// --------------------------------------------------------------------//


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);