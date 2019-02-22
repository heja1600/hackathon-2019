const express = require('express');
const path = require('path');
const app = express();
console.log("SERVER IS ONLINE");
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.join(__dirname, "dynamic-form-angular")));

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.post("/api/get-form", (req, res, next) => {
  const post = req.body;
  console.log(' post', JSON.stringify(post));
  res.status(201).json({
    message: 'Post added successfully'
  });
});



app.use((req, res , next) => {

  res.sendFile(path.join(__dirname, "hackathon-2019", "index.html"));
})

module.exports = app;
