const express = require("express");
const dotenv = require('dotenv').config();
const {errorHandler} = require("./middleware/errorMiddleware")
const colors = require('colors');
const connectDb = require('./config/db')
const port = process.env.PORT || 5000;

const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended:false}))

app.use('/api/tasks', require("./routes/taskRoutes"));
app.use(errorHandler)
app.listen(port , () => console.log(`server started on ${port}`));

