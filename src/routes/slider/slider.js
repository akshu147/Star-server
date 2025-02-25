const express = require("express")
const { addslider } = require("../../controlers/controlers")
const mymulter = require("../../middelwere/multer")
const {showslider, deletesliderone, deletemultipleslider, getslider } = require("../../controlers/slider/slider")
const sliderroutes = express.Router()
sliderroutes.post("/add-slider",
    mymulter.single("sliderimg") ,addslider)
sliderroutes.get("/get-slider", showslider)
sliderroutes.delete("/delete-slider/:_id", deletesliderone)
sliderroutes.post("/delete-allslider", deletemultipleslider)
sliderroutes.get("/get-slider/:_id", getslider)
module.exports = {sliderroutes}