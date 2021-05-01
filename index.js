const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const coworkRoute = require('./routes/coworking')

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/coworks', coworkRoute);

//connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  }).catch(error => {
      console.log("Something Wrong happend", error);
  })



//start server
app.listen(PORT, () => {
  console.log("Server started at PORT ", PORT);
});
