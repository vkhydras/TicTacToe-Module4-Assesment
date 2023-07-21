const mongoose = require("mongoose")

//Whole function used  to connect to MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Caldee:nelly4lyf@cluster0.7oqnlw3.mongodb.net/TicTacToe?retryWrites=true&w=majority");

    console.log("MongoDB connected");
  } catch (err) {
    
 
//If the connection is unsuccessful, an error message is returned  

    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectDB
