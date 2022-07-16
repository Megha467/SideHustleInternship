const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../models/User');

const signUp = (req, res) => {
console.log(req.body);
const {username, password, email} = req.body;
bcrypt.hash(password, 5, async function(err, hash) {
    if(!err){
        try{
            User.create({username, email, password: hash}, (err, user) => {
                if(user){
                    res.status(200).json({user,  msg:'Thank you For registration'})
                }
            })
        }
        catch(err){
            res.status(500).json({msg:err})
        }
    }
    else{
        res.status(500).json({msg:err})
    }
});
} 

const login=(req, res) => {
    const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    console.log('YEEES',user);
    if (user) {
      bcrypt.compare(password, user.password, (err, validated) => {
        console.log("In validation "+validated);
        if (validated) {
          const token = jwt.sign({username:user.username},process.env.SECRET_KEY,{expiresIn:30*60})
          res.status(200).json({token, user})
        } else {
          res.status(401).send({msg:'Either Username or password is Incorrect'})
        }
      });
    } else {
      res.status(401).send({msg:'Either Username or password is Incorrect'})
    }
  });
}

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if(users){
    res.status(200).json({users})
  }
  else{
    res.status(401).send({msg:'Users are not registered'})
  }
}

const deleteUser = async(req, res) => {
  const {id} = req.params;
  const user = await User.findByIdAndDelete(id)
  if(user){
    res.status(200).json({user})
  }
  else{
    res.status(401).send({msg:'No user with this ID exist'})
  }

}


module.exports = {
    signUp, login, getAllUsers, deleteUser
}