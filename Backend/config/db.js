const mongoose = require('mongoose');

var mongoURL = "mongodb+srv://gauravraj:Mongo%40raj11@cluster0.cddlpyx.mongodb.net/FoodApp?retryWrites=true&w=majority" ;

 const connectDB = async () => {
    try {
      await mongoose.connect(mongoURL).then(()=> console.log("database conected"));
  
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit the process with failure
    }
  };

  module.exports = connectDB;




  
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.