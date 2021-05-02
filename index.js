const express = require("express");
const mongoose = require("mongoose");
const winston = require('winston')
const app = express();
require('dotenv').config();
const coworkRoute = require('./routes/coworking')

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// create a logger
 
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format:winston.format.combine(
        winston.format.colorize({all:true})
      )
    }),
    new winston.transports.File({ filename: 'error.log', level:'error'})
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' })
  ]
});

//routes
app.use('/api/coworks', coworkRoute);


//connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}) //beda
  .then(() => {
    logger.info("Connected to MongoDB Atlas");
  }).catch(error => {
      logger.error("error", error.message);
  })



//start server
app.listen(PORT, () => {
  logger.info(`Server started at PORT ${PORT}`);
});
