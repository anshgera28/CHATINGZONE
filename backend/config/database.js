import mongoose from "mongoose";
const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("MongoDB connected");
    }).catch((error) => {
        console.error(error);
       
    })
};
export default connectDB;