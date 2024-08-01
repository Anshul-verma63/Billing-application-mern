import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error while connecting database", error);
  }
};

export default dbConnection;
