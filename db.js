//used for  importing the Mongoose library, 
const mongoose = require("mongoose")
//Whole function used  to connect to MongoDB
const connectDB = async () => {
  try {
// Ensures to wait for the connection to be established    
    await mongoose.connect("mongodb+srv://Evarest:Evarest3@cluster0.7oqnlw3.mongodb.net/TicTacToe?retryWrites=true&w=majority");
//If the connection is successful message is returned    
    console.log("MongoDB connected");
  } 
//If the connection is unsuccessful message is returned  
  catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
// Exporting a function so as to be imported by anothrer module
module.exports = connectDB
