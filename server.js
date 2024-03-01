// Import the Express library
const express = require ("express");

// Import the function to connect to the MongoDB database
const connectdb = require("./config/connect");

// Import the router for the application routes
const appRouter = require("./routes/appRouter");

// Create an Express application
const app = express()
// Define the port number on which the server will listen
const port = 4500;

//link with our DB
connectdb()


// partie routes
// Middleware to parse JSON data in the request body
app.use(express.json())

// Middleware to handle routes defined in the appRouter
// All routes in appRouter will start with '/api/'
app.use('api/',appRouter)


// Start the server and listen on the specified port
app.listen(port,(err)=>{
       
    // If the server starts successfully, log the success message with the URL
    err?console.log(err):console.log(`Our server is running on http://localhost:${port}`);
})