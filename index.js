const express = require("express");
const userRoutes = require("./routes/userRoutes");
const userAuthRoutes = require("./routes/authRoutes");
require('dotenv').config()
const connectDB = require('./config/db')

const app = express();

app.use(express.json()); //middleware

//!mongodb server
connectDB();

//! Routes
app.use("/api/users", userRoutes);
app.use("/api/authUser", userAuthRoutes);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
