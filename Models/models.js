const mongoose = require("mongoose");

// Moongoose schema

const user = mongoose.Schema({
    name: String,
    email: String,
    pass: String
});


// Moongoose  Model

const Profile = mongoose.model("Users", user);

module.exports = mongoose.model("Users", user);