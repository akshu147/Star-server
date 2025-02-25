const express = require("express");
const { addproductcat, showproductcat, deleteProcutCatOne, deleteallproductcat, getproductcat, Updadateproductcat } = require("../../controlers/controlers");
const mymulter = require("../../middelwere/multer");
const productcatroutes = express.Router();
const uploaddata = mymulter.single("categoryImg")
productcatroutes.post("/add-product-category", uploaddata ,addproductcat)
productcatroutes.get("/get-product-category", showproductcat)
productcatroutes.delete("/delete-product-category/:_id", deleteProcutCatOne)
productcatroutes.post("/delete-all-product-category", deleteallproductcat)
productcatroutes.get("/get-single-product-category/:_id", getproductcat )
productcatroutes.put("/update-product-category/:_id", Updadateproductcat)

module.exports = {productcatroutes} 