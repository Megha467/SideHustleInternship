const express = require('express');
const app = express();
var cors = require('cors')
const dotenv = require("dotenv");

const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

dotenv.config();
//Routers
const userRouter = require('./routes/user')
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Final_Ead");
app.use(userRouter);

app.listen(8080, function () {
    console.log(`listening at port 8080`);
  });

  module.exports = app;