import mongoose from "mongoose";

// Step 1: Define the schema
const userSchema = new mongoose.Schema({
   fullName: {
       type: String,
       required: true
   },
   username: {
       type: String,
       required: true,
       unique: true
   },
   password: {
       type: String,
       required: true
   },
   profilePhoto: {
       type: String,
       default: ""
   },
   gender: {
       type: String,
       enum: ["male", "female"],
       required: true
   }
}, { timestamps: true });

// Step 2: Create the model
const User = mongoose.model("User", userSchema);

// Step 3: Export it properly
export default User;
