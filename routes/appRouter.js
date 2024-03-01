// Import the Express library
const express = require ('express');

// Import the controller functions from '../controllers/person'
const { createPerson, createManyPersons, findPeople, findUsingFood, findPersonById, classicUpdateFood, deletePerson, UpdateFood } = require('../controllers/person');

// Create an Express router
const appRouter = express.Router();

// Define routes for different CRUD operations using the controller functions
// Route to create a single person
appRouter.post('createPerson',createPerson);

// Route to create multiple persons at once
appRouter.post('createManyPersons',createManyPersons);

// Route to find all people
appRouter.get('findPeople',findPeople);

// Route to find people based on their favorite food
appRouter.get('findUsingFood/:food',findUsingFood);

// Route to find a person by their unique ID
appRouter.get('findpersonById/:id',findPersonById);

// Route to perform a classic update (not using Mongoose methods) on a person's favorite food by ID
appRouter.put('classicUpdateFood/:id',classicUpdateFood);

// Route to update a person's favorite food by their name
appRouter.put('UpdateFood/:name',UpdateFood);

// Route to delete a person by their ID
appRouter.delete('deletePerson/:id',deletePerson);

// Export the router so that it can be used in the main Express application
module.exports=appRouter