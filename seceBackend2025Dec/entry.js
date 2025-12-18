const express = require("express");
const mdb = require("mongoose");
const Signup = require("./models/SignupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 8001;

app.use(express.json());
app.use(cors())
dotenv.config()

mdb
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("MongoDB Connection Unsuccessful", err));

app.get("/", (req, res) => {
  res.send("Server started successfully");
});

const verifyToken = (req,res,next) =>{
  const token = req.headers.authorization
  if(!token){
    res.send("Request Denied")
  }
  try{
    const payload = jwt.verify(token, process.env.SECRET_KEY)
    console.log(payload);
    console.log("Middleware check successful");
    req.username = payload.username
    next();
  }
  catch(err){
    console.log(err);
  }
}

app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newSignup = new Signup({
    email: email,
    username: username,
    password: hashedPassword,
  });
  newSignup.save();
  res.status(200).json({ "message": "Signup Successful", "isSignup": true });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log(existingUser);

    if (existingUser) {
      const payload = {
        email:existingUser.email,
        username:existingUser.username
      }
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);

      if (isValidPassword) {
        const token = jwt.sign(payload,process.env.SECRET_KEY)
        console.log(token);
        res.status(200).json({
          message: "Login Successful",
          isLoggedIn: true,
          token:token
        });
      } else {
        res.status(401).json({
          message: "Incorrect Password",
          isLoggedIn: false,
        });
      }
    } else {
      res.status(404).json({
        message: "User not Found Signup First",
        isLoggedIn: false,
      });
    }
  } catch (error) {
    console.log("Login Error");
    res.status(500).json({
      message: "Login Error",
      isLoggedIn: false,
    });
  }
});

app.get('/getallsignup',async(req,res)=>{
  const signup = await Signup.find();
  console.log(signup);
  res.send("Data Fetched")

})

app.get("/json",verifyToken, (req, res) => {
  res.json({
    College: "Sece",
    Dept: "CYS",
    StuCount: "64",
    fac:req.username
  });
});

app.get("/static", (req, res) => {
  res.sendFile(
    "C:\Users\tharu\MernIntern2025\seceBackend2025Dec\index.html"
  );
});

app.get('/personal-profile',verifyToken, (req,res)=>{
  res.send(`Welcome, ${req.username}`)
})

app.listen(PORT, () => {
  console.log(`Server Started Successfully in the port ${PORT}`);
});