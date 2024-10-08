import mongoose from "mongoose";

let isConnected = false; // track connection status

export const ConnectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected.");
    return true;
  } catch (error) {
    console.log("MongoDB Connection iserror : ", error);
    return false;
  }
};
