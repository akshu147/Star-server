const mongoose = require("mongoose")
const colorschema = new mongoose.Schema({
    colorcode:{
        type:String,
        unique:true
    }

})
const clrmodel = mongoose.model("colors", colorschema)
module.exports = {clrmodel}