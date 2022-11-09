const express = require("express");
const mongoose = require("mongoose")
require('dotenv/config');
const cors = require('cors')
const minionRoute = require('./controller/minion');

const app = express()

const conn = process.env.DB_CONNECTION;
const connectDB = async () => {
  try {
    await mongoose.connect(conn);
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/minions',minionRoute);



app.listen(process.env.PORT, (error) => {
    if (error) throw error;
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  });