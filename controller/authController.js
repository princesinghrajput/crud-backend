const UserAuth = require("../models/AuthUser");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try{

    const userExist = await UserAuth.findOne({email})

    if(userExist){
      return res.status(400).send("User already exists");
    }
    
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await UserAuth({username, email, password: hashedPassword});
    await newUser.save();

    return res.status(201).send( newUser)

  
  }catch(err){
    console.log(err)
    return res.status(500).send("Error registering user");
  }
   


};

exports.loginUser = async (req, res) => {
  res.send("This is the login user page!");
};
