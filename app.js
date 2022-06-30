
const express = require("express");
var cors = require('cors');

const addRoute = require("./Routers/add-user.js");
const deleteRoute = require("./Routers/deleteRoute")

const app = express();
app.use(express.json()); //global middleware 
app.use(cors()) ;

// Routing
app.use("/add-user",addRoute);
app.use("/delete-user",deleteRoute);

//Port
app.listen(process.env.PORT || 3001, function () {
    console.log("Server is running at port 3000 ");
})