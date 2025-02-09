const mongoose = require('mongoose')

const addsizescheema = new mongoose.Schema({
    size: {
        type: String,
        unique: true,
        required: true, 
        trim: true
    },
    status: {
        type: String,
        required: true,  // Ensuring status is mandatory
        enum: ['hide', 'display'], // Optional: restrict status values
        default: 'active' // Optional: set a default status
    }
}, { timestamps: true });

const addsizemodel = mongoose.model("addsizes", addsizescheema);

module.exports = addsizemodel;  // Directly export the model
