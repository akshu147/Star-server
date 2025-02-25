const mongoose = require("mongoose")
const productcatschema = new mongoose.Schema({
    categoryName: {
        type:String,
        required:true,
        uniqui:true
    },
    categoryDec:{
        type:String
    },
    status:{
        type:String,
        enum:["hide", "display"],
        required:true
    },
    categoryImg:{
        type:String
    }

}, {timestamps:true})
const productcatmodel = mongoose.model("productcats", productcatschema)
module.exports = {productcatmodel}