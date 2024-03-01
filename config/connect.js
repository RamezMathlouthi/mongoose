// Import the Mongoose library
const mongoose = require ('mongoose')

// Define an asynchronous function to connect to the MongoDB database
const connectdb =async () =>{
    try {
         // Use Mongoose to connect to the MongoDB Atlas cluster
    // "AlaDridi" is my MongoDB Atlas username, and "4GOESpI0cHLesvBb" is my password
        await mongoose.connect("mongodb+srv://AlaDridi:4GOESpI0cHLesvBb@cluster0.1agr8tp.mongodb.net/",{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the DB') // If the connection is successful, log a message
    } catch (error) {
        console.log(err)     // If an error occurs during the connection, log the error message

    }
};
// Export the connectdb function so that it can be used in other parts of the application

module.exports = connectdb;