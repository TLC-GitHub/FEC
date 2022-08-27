require("dotenv").config();
const helper = require('./hrapi.js');

const express = require("express");
const path = require("path");
let app = express();

// app.use(express.static("client/dist"));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.get('/get', (req, res) => {
  console.log("AM I HERER?");
  console.log("req: ", req.query);

  let widget = req.query.widget;
  let queryParams = JSON.parse(req.query.queryParams) || '';
  let pathVariable = req.query.pathVariable || '';
  let subCategory = req.query.subCategory || ''

  helper.getInfo(widget, queryParams, pathVariable, subCategory)
    .then((result) => {
      console.log("data from API: ", result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log("I HAVE ERROR");
      console.log(err);
      res.sendStatus(500);
    })
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);