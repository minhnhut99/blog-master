const mongoose = require("mongoose");
const DATABASE_URL =
  "mongodb+srv://david:david@blog-app-cluster.sf8zny3.mongodb.net";
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("CONNECT SERVER SUCCESS!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
