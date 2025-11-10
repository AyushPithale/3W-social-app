const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// registerUser
module.exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //  console.log(username , email,  "req" ,req.body)
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

   
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });
   res.cookie("token", token)
    res.json({ message:"User login successfully!", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// logout
module.exports.logout = async (req,res) => {
   
 res.cookie("token", "")
  res.json({message:"User logout successfully!"})
}


//me user 

module.exports.me = async (req,res) => {


  try {
     const userId = req.user.id

     const user = await User.findById(userId).select("-password")


     res.status(200).json(user)
  } catch (err) {
   res.status(500).json({message:"Server error"})    
  }
  
}