import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

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
        return res.status(201).json({message: "User registered successfully"});
        
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}