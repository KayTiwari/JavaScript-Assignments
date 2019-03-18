const mongoose = require('mongoose')
//mongoose has methods that interact with MongoDB
//Schemas allow mongoose to organize the data

const Schema = mongoose.Schema
//Helps construct new schema objects
//Note the new Schema method takes an object as its argument


//Each key should correlate with the keys of the incoming object from the client
//Each key will default to request the type
//However, you may also pass in an object that specifies the values more clearly
const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: String,
    hireDate: {
        type: String,
        required: true
    },
    ssn: Number,
    address: String,
    isCool: {
        type: Boolean,
        default: false
    },
    ethnicity: {
        type: String,
        enum: ['Caucasian', 'Hispanic', 'Dragon', 'Asian', 'Mulatto']
    }
})

module.exports = mongoose.model('Employee', employeeSchema)
//Note the model method of mongoose takes two arguments
//The first argument is a string by which the an instance of the schema will be referenced
//The second argument is the schema template