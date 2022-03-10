import mongoose from "mongoose";
import config from "config";

const db = config.get("mongoURI");

const connentDatabase = async () => {
  try {
    await mongoose.connect(db);
    console.log(`Database connected -_- :)`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connentDatabase;
