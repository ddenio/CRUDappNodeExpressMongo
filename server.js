//server.js

console.log('May Node be with you');
// console.log(__dirname)

//Here we are using express in this 'server.js' file by requiring it.
const express = require('express');
//Turns out, Express doesn’t handle reading data from the <form> element on it’s own. We have to add another package called body-parser to gain this functionality.
//Body-parser is a middleware. They help to tidy up the request object before we use them. Express lets us use middleware with the use method.
const bodyParser = require('body-parser')
//Once installed, we can connect to MongoDB through the MongoClient’s connect method as shown in the code below:
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://ddenio:Kb35Xoac4MzNG4Gp@cluster0.ljynoar.mongodb.net/?retryWrites=true&w=majority";
const app = express();



//Make sure you place body-parser before your CRUD handlers!
//The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({ extended: true }))

//Creating a server that browsers can connect to; using Expresses 'listen' method.
app.listen(3000, function () {
    console.log('listening on 3000')
  });

//Next we need to send a GET request to the server to perform the READ operation
// app.get('/', (req, res) => {
//     res.send('Hello World')
// });

//Now we can change this file to serve up an index.html page back to the browser
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    
    
  });

//We can handle the HTML POST request with a post method in this server.js file. The path path should be the value you placed in the action attribute of our HTML file.
app.post('/quotes', (req, res) => {
    console.log(req.body)
  })


//   MongoClient.connect("mongodb+srv://ddenio:Kb35Xoac4MzNG4Gp@cluster0.ljynoar.mongodb.net/?retryWrites=true&w=majority", (err, client) => {
//     if (err) return console.error(err)
//   console.log('Connected to Database')
//   })