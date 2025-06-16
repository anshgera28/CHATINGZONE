import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";



export const register = async(req, res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).json({message: "All fields are required"});
        }
        if(password !== confirmPassword){
            return res.status(400).json({message: "Passwords do not match"});
        }

    // if user already exists
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message: "User already exists try different"});
        }
        // encrypting password
        const hashedPassword = await bcrypt.hash(password, 10);

        //profile photo
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;



        // for registration ye humara create hua hai mpongo db database mein ke ander ......
        await User.create({
            fullName,
            username,
            password:hashedPassword,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        });
        return res.status(201).json({message: "User registered successfully", success: true});
        
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};

export const login = async(req, res)=>{
    try{
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        // check if user is exist or not
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        // check password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({message: "Invalid credentials", success: false});
        }
        // generate token
        const tokenData = {
            userId: user._id,
        }
        const token =  await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: "1d"});
        return res.status(200).cookie("token", token,{maxAge: 24 * 60 * 60 * 1000, httpOnly: true,  sameSite: "strict"}).json({_id: user._id, username: user.username, fullName: user.fullName, profilePhoto: user.profilePhoto});
        
        
        

    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
};

export const logout = (req, res)=>{
    try{
        return res.status(200).cookie("token", "", {maxAge: 0}).json({message: "User logged out successfully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}

// get other users
export const getOtherUsers = async(req, res)=>{
    try{
        const logedinUserId = req.Id;
        const otherUsers = await User.find({ _id: { $ne: logedinUserId } }).select("-password")
        return res.status(200).json(otherUsers);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}