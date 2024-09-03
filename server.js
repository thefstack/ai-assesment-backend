const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const bodyParser=require("body-parser");
const quizRoute=require("./routes/quiz")
const { check, validationResult } = require('express-validator');
const User = require('./models/User');
const authMiddleware=require("./middleware/authMiddleware");
const authRoute=require("./routes/auth")

dotenv.config();
const app=express();
const port=process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());

const db=require("./db")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/quizzes",authMiddleware,quizRoute);
app.use("/auth", authRoute);


app.get("/",(req,res)=>{
    res.send("this is server")
})



app.listen(port,()=>{
    console.log("Connected to server");
})