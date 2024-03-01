const mongoose = require ('mongoose')

// Define the schema for the "person" collection in MongoDB
const personSchema = mongoose.Schema({
    name:{   

        // The "name" field of type String, which is required (must be provided when creating a new document)
        type:String,
        required:true
    },
    age:Number, // The "age" field of type Number 
    favoriteFoods:[String]  // The "favoriteFoods" field of type Array of Strings
})
// Create a model for the "person" collection using the defined schema
// The model will be named 'personne', and it will be used to interact with the "person" collection in MongoDB
module.exports=mongoose.model('personne',personSchema)