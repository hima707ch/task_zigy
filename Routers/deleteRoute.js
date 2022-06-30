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

    // Get email and pass of user to be deleted
    const Email = req.body.email;
 
        // Deleting the user
        await Profile.deleteOne({email: Email}).then((obj) => {
            console.log("Deleted Successfully !");
        })
        .catch((err) => {
            console.log('Error: ' + err);
        }); 
});

module.exports=router;