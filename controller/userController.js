const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    
    const user = new User(req.body);
    await user.save();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getAllUser = async (req, res) => {

    try{
        const users = await User.find()
        res.send(users)
    }catch(err){
        res.status(500).send(err.message)
    }
  
};


exports.getUserById = async(req, res) =>{
   try{

    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).send("User not found");

    
   return res.status(200).send(user)
   }catch(err){
    return res.status(500).send(err.message)
   }
}

exports.updateUser = async(req, res)=>{
  try{
  
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
   
    return res.status(200).send(user)
  } catch(err){
    return res.status(404).send(err.message)
  }
  
  
}


exports.deleteUser = async(req, res)=>{

  try{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).send("User not found");

    return res.status(200).send("User deleted successfully!")
  }
  catch(err){
    return res.status(500).send(err.message)
  }

}
