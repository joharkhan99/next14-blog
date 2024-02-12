const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("New DB connection");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
