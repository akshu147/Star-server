const express = require("express")
const { adminroutes } = require("./routes/admin/adminroutes")
const { colorRoute } = require("./routes/addcolor/addcolor")
const { profileroute } = require("./routes/profile/updateprofile")
const { sizeroutes } = require("./routes/size/size")
const { categoryroutes } = require("./routes/category/category")
const allroutes = express.Router()
const usercoutes  = express.Router()


allroutes.use("/admin", adminroutes)  //routes of admin
allroutes.use("/user", usercoutes)
allroutes.use("/color", colorRoute)
allroutes.use("/profile", profileroute ) // routes of user
allroutes.use("/size", sizeroutes)
allroutes.use('/category', categoryroutes)

module.exports = {allroutes}

