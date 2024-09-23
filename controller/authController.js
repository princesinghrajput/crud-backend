const UserAuth = require("../models/AuthUser");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExist = await UserAuth.findOne({ email });

    if (userExist) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await UserAuth({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error registering user");
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserAuth.findOne({ email: email });

  console.log("ExistUser", user);

  if (!user) {
    return res.status(404).send("Invalid username or password!");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) return res.status(404).send("Invalid Password!");

  //Generate jwt token

  const token = jwt.sign({userId:user._id }, 'abcd', { expiresIn: '1h' });

  console.log(token)

  return res.status(200).send({token: token})

};
