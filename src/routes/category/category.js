const express = require("express")
const { addcategory } = require("../../controlers/controlers")
const mymulter = require("../../middelwere/multer")
const { showparentcategory, deletecategoryone, getcategory, updatecategory, deleteallcategory } = require("../../controlers/category/category")
const categoryroutes = express.Router()


const getdatabymulter = mymulter.single("categoryimg")
categoryroutes.post("/add-category", getdatabymulter ,addcategory)
categoryroutes.get("/getcategory", showparentcategory)
categoryroutes.delete("/delete-category/:_id", deletecategoryone)
categoryroutes.get("/get-category/:_id", getcategory)
categoryroutes.put("/update-category/:_id", updatecategory)
categoryroutes.post("/delete-allcategory", deleteallcategory)

module.exports = {categoryroutes}
