require("./src/db/config")
require("dotenv").config()
const cors = require('cors');
const express = require("express")
const fs = require("fs")
const path = require("path")
const {ragisteradmin } = require("./src/controlers/admin/login");
const { allroutes } = require("./src/app");
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api", allroutes)


// app.post("/login-admin", ragisteradmin)

app.listen(process.env.PORT, ()=> {
    console.log(`Listernig on port number ${process.env.PORT}`)
})