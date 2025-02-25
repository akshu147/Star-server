const mongoose = require("mongoose")
const sliderschema = new mongoose.Schema({
    slidername:{
        type:String,
        required:true,
        unique:true
    },
    heading:{
        type:String,
        trim:true
    },
    subheading:{
        type:String,
        trim:true,
    },
    status:{
        type: String,
        required: true,  // Ensuring status is mandatory
        enum: ['hide', 'display'], // Optional: restrict status values
        default: 'display' // Optional: set a default status
    },
    sliderimg:{
        type:String,
        required:true
    }

    
},{timestamps:true})
const slidermodel = mongoose.model("slidermodels",sliderschema)
module.exports = {slidermodel}