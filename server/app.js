require("dotenv").config();
const helper = require('./hrapi.js');
const express = require("express");
const path = require("path");
let app = express();

// app.use(express.static("client/dist"));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

//routes

app.get('/get', (req, res) => {
  // console.log("req: ", req.query);

  let widget = req.query.widget;
  let pathVariable = req.query.pathVariable || '';
  let subCategory = req.query.subCategory || ''

  let queryParams = req.query.queryParams === undefined ? '' : JSON.parse(req.query.queryParams);

  helper.getInfo(widget, queryParams, pathVariable, subCategory)
    .then((result) => {
      // console.log("data from API: ", result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => {
      // console.log("I HAVE ERROR");
      // console.log(err);
      res.sendStatus(500);
    })
});

app.put('/put', (req, res) => {

  let widget = req.body.widget;
  let pathVariable = req.body.pathVariable || '';
  let subCategory = req.body.subCategory || '';



  // console.log(req.body.queryParams, 'queryParams');
  // console.log(typeof req.body.queryParams);
  let queryParams = req.body.queryParams === undefined ? '' : req.body.queryParams;

  console.log(pathVariable);
  helper.updateInfo(widget, queryParams, pathVariable, subCategory)
    .then((result) => {
      res.status(204).send('successfully updated')
    })
    .catch((err) => {
      res.status(500).send('could not update');
    })
})

app.post('/post', (req, res) => {
  let widget = req.body.widget;
  let subCategory = req.body.subCategory || '';
  let queryParams = req.body.queryParams === undefined ? '' : req.body.queryParams;
  let bodyParams = req.body.bodyParams

  helper.postInfo(widget, bodyParams, queryParams, subCategory)
    .then(() => {
      res.status(201).send('succesfully posted');
    })
    .catch((err) => {
      res.status(500).send('could not post');
    })
})
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);