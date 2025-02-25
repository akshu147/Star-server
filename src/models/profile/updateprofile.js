const mongoose = require("mongoose");

const updateProfileSchema = new mongoose.Schema({
    userid: {
        type:String,
        required: true,
        ref: "User" // If you have a separate User model
    },
    name: {
        type: String,
        required: true, 
    },
    facebook: {
        type: String,
    },
    instagram: {
        type: String,
    },
    youtube: {
        type: String,
    },
    twitter: {
        type: String,
    },
    password: {
        type: String,
    },

}, { timestamps: true }); // Adds createdAt and updatedAt automatically

const updateProfileModel = mongoose.model("UpdateProfile", updateProfileSchema);

module.exports = { updateProfileModel };
