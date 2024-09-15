const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const getUser = asyncHandler(async (res, req) => {
    const user = User.find();
    res
    .status(200)
    .json(user);
} )
// @desc Register new user
// Post /api/users
// Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields');
    }
    // check if user already exists
    const userCheck = await User.findOne({email});
    if(userCheck){
        res.status(400)
        throw new Error('User already exists');
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //Create user
    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        })
    } else {
        res.status('400')
        throw new Error('Invalid user data')
    }
})
//@desc Authenticate new user
// POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password}= req.body;
    //check for user email
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})
//@Desc Get user data
// @route GET /api/user/me
// @access Private
const getMe = asyncHandler(async (req, res)=>{
    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}



module.exports={
    registerUser,
    loginUser,
    getMe,
}