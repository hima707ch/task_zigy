const express = require("express");
var cors = require('cors');
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();
const Profile = require("../Models/models.js");

// Initializing packs
const app = express();
app.use(express.json()); //global middleware 
app.use(cors()) ;
app.use(bodyParse.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/UserData",{useNewUrlParser : true});

router.post("/", async function (req, res) {

    // This function recives values from body.
    var user = new Profile({
        name : req.body.name,
        email : req.body.email,
        pass : req.body.pass
    });

        await user.save();
        console.log("Saved Successfully !");
    }

);

module.exports=router;