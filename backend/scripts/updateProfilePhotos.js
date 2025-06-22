import mongoose from "mongoose";
import User from "../models/userModel.js";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/yourdbname"; // Update if needed

async function updateProfilePhotos() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const users = await User.find({});
  for (const user of users) {
    user.profilePhoto = `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(user.username)}`;
    await user.save();
    console.log(`Updated profile photo for ${user.username}`);
  }
  await mongoose.disconnect();
  console.log("All user profile photos updated!");
}

updateProfilePhotos().catch(err => {
  console.error("Error updating profile photos:", err);
  process.exit(1);
});
