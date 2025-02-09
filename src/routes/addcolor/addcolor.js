const express = require("express")
const { addcolor } = require("../../controlers/controlers")
const colorRoute = express.Router()
colorRoute.post("/add-color", addcolor)
module.exports = {colorRoute}