const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const userAuthRoutes = require('./routes/authRoutes')
 
const app = express();

app.use(express.json()); //middleware

mongoose.connect("mongodb://localhost:27017/crud-app").then(()=>{
    console.log("Connected to MongoDB")
 }).catch((err)=>{
    console.log("Error connecting to MongoDB", err)
 
})

app.use((req, res, next)=>{
    console.log("I am the middleware")

    next()
});

app.use((req, res, next)=>{
    console.log("This is the second middleware");

    next();
})
app.use('/api/users', userRoutes);
app.use('/api/authUser', userAuthRoutes);

app.get('/', (req, res)=>{
    res.json({msg:"hey I am working fine"})
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")  
})


