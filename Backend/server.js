const express = require("express");
const dotenv = require('dotenv').config();
const {errorHandler} = require("./middleware/errorMiddleware")
const colors = require('colors');
const connectDb = require('./config/db')
const port = process.env.PORT || 5000;
const cors= require('cors');
const app = express();
const path = require('path');
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
//cors setup
app.use(cors({
    origin:['http://must-do-it-2-tupy.vercel.app/','https://must-do-it-fs.vercel.app/',"http://localhost:5173/"],
    credentials:true,
}))

//
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/tasks', require("./routes/taskRoutes"));
//serve frontend 
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'../','frontend','dist','index.html')) )
}else{
    app.get('/',(req,res)=>{
        res.send('Please set to production');
    })
}
app.use(errorHandler)
app.listen(port , () => console.log(`server started on ${port}`));

