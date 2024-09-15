const express = require("express");
const dotenv = require('dotenv').config();
const {errorHandler} = require("./middleware/errorMiddleware")
const colors = require('colors');
const connectDb = require('./config/db')
const port = process.env.PORT || 5000;
const cors= require('cors');
const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
//cors setup
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true,
}))

//
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/tasks', require("./routes/taskRoutes"));

app.use(errorHandler)
app.listen(port , () => console.log(`server started on ${port}`));

