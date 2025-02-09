const mongoose = require("mongoose")
const adminloginscheema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },

})

const adminloginmodel = mongoose.model("Admindatalogin", adminloginscheema)
module.exports = {adminloginmodel}