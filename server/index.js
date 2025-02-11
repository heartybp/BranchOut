const express = require("express");
const app = express(); // variable app runs express
const cors = require("cors");
const pool = require("./db"); // add to connect to database


// middleware
app.use(cors());
app.use(express.json()); // <-- allows us to access request.body
    // when building fullstack application, need data from client side
    // only way to get data from client side is from request body object

// ROUTES: 

// NOT YET COMPLETED

// 1 - create a user
app.post("/users", async(req, res) => {
    try{
        const {username, email, firstName, lastName, password} = req.body;
    } catch (err) {
        console.error(err.message);
    }
})

// 2- get all users
app.post("/users", async(req, res) => {
    try{

    } catch (err) {
        console.error(err.message);
    }
})

// 3 - get a single user
// 4 - update a user
// 5 - delete a user

app.listen(5001, () => {
    console.log("server has started on port 5001");
});

/*
    by default, use port 5000
    i have some other program that's taking up port 5000 so i used 5001
    
    - hearty
*/
