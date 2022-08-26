require("dotenv").config();
const helper = require('./hrapi.js');
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("client/dist"));
app.use(express.json());

//routes
app.get('/', (req, res) => {
  getInfo(req.body.widget, req.body.queryParams)
  .then((data) => {
    res.sendStatus(200);
    res.send(data);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.post('/', (req, res) => {
  postInfo(req.body.widget, req.body.queryParams)
  .then((data) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);