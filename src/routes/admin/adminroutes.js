const express = require("express");
const {AdminLogin, rufdata } = require("../../controlers/admin/login");
const adminroutes = express.Router();
adminroutes.post("/admin-login", AdminLogin)
adminroutes.get("/demo", rufdata)
module.exports = {adminroutes}// for admin routes
