const express = require('express')
const app = express()
//Note app is what the express() method is returning
//This gives us access to the express library

const mongoose = require('mongoose')
//middleware that helps handle changes with your MongoDB from your server


app.use(express.json())
//Middleware that converts all incoming and outgoing objects into and from JSON
//Note there are other formats for sending and recieving information through the web. We will be using JSON



mongoose.connect('mongodb://localhost:27017/full-stack-practice', {useNewUrlParser: true}, () => {
    console.log('Connected to the database')
})
//mongoose's connect method takes up to three arguments. The first is the address of the database, and the second is settings, and the third is a callback that we used to indicate the connection between server and mongodb
.catch(err => console.error(err))
//the catch will catch any errors passed from mongoDB and will appear in the console

let indicatedPort;
//This is a placeholder for imported port location
const port = indicatedPort || 4533
//indicated port would come from your .env file or as prescribed by your host
//the || 'double pipe' means 'or', which allows you to write a default port

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
//listen is a method of express, which we pull through 'app'
//First argument is the port, and the second is a callback function



//Routes
app.use('/employees', require('./routes/employee-routes'))






