const express = require('express')
//Access to express library
const employeeRoute = express.Route()
//Access to express routes
//Note how it tags onto the first endpoint mentioned in the server || app.use('/employee')

const Employee = require('../models/employeeSchema')
//this refers to an instance of the 'employee schema'
//Note the schema is only a template to create new employees
//Note ../ sends you back a directory (folder)

employeeRoute.route('/')
//Note that the rest of the endpoint exists on the server file where the route was referenced
//In server file as app.use('/employee', require('./employeeRoutes))

    // Here we chain how handle the requests at this endpoint
    //Now we will handle our CRUD requests starting with get()

    //Note the requests are coming from the client, your React App

    .get((req, res, next) => {
        //Note the get() method takes a callback function
        //We will give it the parameters of req ('request')
        Employee.find((err, employees) => {
            //The first parameter of the callback function is the error
            //Second parameter is the collection of objects being found
            //We typically handle errors first to see if there was any problem
            if(err){
                //The condition checks to see if an error exists
                return res.status(500).next(err)
                //.next method is coming from the third parameter
                //Used for error handling
                //pass in the argument 'err'
            }
                // .status() method will change the response status property with the passed in argument (500)
                // .next method will pass the error to console and the next statement will fire
                return res.status(200).send(employees)
        })
    })

    .post((req,res) => {
        const newEmployee = new Employee(req.body)
        //new Employee() method takes one argument
        //and returns a new object containing info from the request
        //The info from the request is organized according to the Schema
        newEmployee.save(err => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(newEmployee)
        })
    })

    employeeRoute.route('/:_id')
        //Note the use of _id refers to the id of the object in the database
        //The colon, : , is a indicator that the following item in the string is a parameter
        //The value of _id will then be found in the request parameters

        .get((req,res) => {
            Employee.findById({_id: req.params._id}, (err, employee) => {
                //The findById method of mongoose takes two arguments, an object, and a callback function
                //This object must contain the id, with the key _id, because it will search the MongoDB for an object that matches that key and value
                //The callback function should have two parameters, one for an error and the second for the specified object
                if(err) return res.status(500).send(err)
                return res.status(200).send(employee)
            })
        })
        .put((req,res) => {
            Employee.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, (err, employee) => {
                //Argument One: The object containing the id
                //Argument Two: req.body
                //Argument Three: {new: true} setting
                //Argument four: the callback function
                if(err) return res.status(500).send(err)
                return res.status(200).send({
                    msg: 'Successfully updated the employee',
                    employee: employee
                })
                //Note with es6, you only need to write
                // {
                //      msg: 'laldflsd',
                //      employee
                // }

            })
        })

        .delete((req, res) => {
            Employee.findOneAndDelete({_id: req.params._id}, (err, employee) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(`You killed ${employee.firstName}`)
                //Note: You don't need to return anything, but this is how you would return it
            })
        })


module.exports = employeeRoute
//Exporting the route so the other files have access to this file