MISC Notes
------------------------
if else statements check to see if a condition is true, then runs some code

ex: if(conditionIsTrue){
    runSomeCode()
}

ex: if(true){
    thisWillRun()
}

We use conditions in for loops, example

ex: for(let i = 0; someCondition; i++){
    run this code
    }

ex: for(let i = 0; i < str.length; i++){
    run this code
}


Callback functions
function that is passed in as an argument

Anonymous functions are typically passed in as callbacks (callback functions)

ex: arr.map((item) => item + 1)
The above map method takes a callback function

ex: .get((req,res) =>{
    return 'hello'
})

Note: (req,res) => {} is your callback function


Objects contain keys and values
ex: const newObj = {
    keyOne: valueOne,
    name: 'Bart'
}


parameters are placeholders for arguments when creating a function

ex: function exFunc(paramOne, paramTwo){
    return paramOne + paramTwo
}


arguments are passed into functions when they are called

ex: exFunc(argumentOne, argumentTwo)
------------------------
Setting Up
------------------------

We created a directory (folder) for our full-stack practice project

create a server file with a folder for the models another for routes

Server Notes
----------------------
npm init -y  --> Creates a package.json file... Note that it is separate from the package.json file in the client folder.

install express and mongoose
Node Command: npm i express mongoose

We need to connect to the database

We need to listen to the port through which the server will receive calls

We need to handle the routes
Note the use of app.use() method in reference to the express routes in the routes folder

