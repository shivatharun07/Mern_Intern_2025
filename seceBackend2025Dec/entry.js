const express = require("express");
const mdb = require("mongoose");
const Signup = require("./models/SignupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors")
const app = express();
const PORT = 8001;

app.use(express.json());
app.use(cors())

mdb
  .connect("mongodb://localhost:27017/seceDec2025")
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("MongoDB Connection Unsuccessful", err));

app.get("/", (req, res) => {
  res.send("Server started successfully");
});

app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newSignup = new Signup({
    email: email,
    username: username,
    password: hashedPassword,
  });
  newSignup.save();
  res.status(200).json({ Message: "Signup Successful", isSignup: true });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log(existingUser);

    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);

      if (isValidPassword) {
        res.status(200).json({
          message: "Login Successful",
          isLoggedIn: true,
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

app.get("/json", (req, res) => {
  res.json({
    College: "Sece",
    Dept: "CYS",
    StuCount: "64",
  });
});

app.get("/static", (req, res) => {
  res.sendFile(
    "/Users/prasanthksp/Documents/RAMPeX-Parent-Folder/Trainings/SECE/SECE_MERN_DEC_2025/seceBackend2025Dec/index.html"
  );
});

app.listen(PORT, () => {
  console.log(`Server Started Successfully in the port ${PORT}`);
});
