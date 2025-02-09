const mongoose = require("mongoose");

const updateProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User (if applicable)
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
    }
}, { timestamps: true }); // Adds createdAt and updatedAt automatically

const updateProfileModel = mongoose.model("UpdateProfile", updateProfileSchema);

module.exports = { updateProfileModel };
