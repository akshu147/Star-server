require("dotenv").config()
const mongoose = require("mongoose")
const url2 = `mongodb+srv://${process.env._CLUSTERUSERNAME}:${process.env._CLUSTERPASSWORD}@akshay.y0o5z.mongodb.net/${process.env._DATABASENAME}?retryWrites=true&w=majority&appName=${process.env._CLUSTERAPPNAME}`

mongoose.connect(url2, {
    connectTimeoutMS: 10000, // 10 seconds
    serverSelectionTimeoutMS: 10000
})
.then(()=> {
    console.log("Database connection stable ✔✔")
})
.catch((err)=> {
    console.log(err)
})

