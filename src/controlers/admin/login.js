require("dotenv").config()
const { byte } = require("webidl-conversions");
const { adminloginmodel } = require("../../models/admin/adminlogin")
const bcrypt = require('bcrypt'); // Import bcrypt for secure password comparison


const ragisteradmin = async (req, res) => {
    const predata = await adminloginmodel.find()
    console.log(predata.length)
    if (predata.length !== 0) return console.log(predata)
    const data = {
        username: process.env._ADMINEMAIL,
        password: process.env._ADMINPASSWORD
    }
    const datatosave = new adminloginmodel(data)
    const responce = await datatosave.save(datatosave)
    console.log(responce)

}

const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await adminloginmodel.findOne({ username: email });
        console.log("fuck", user)
        if (!user) {
            return res.status(401).json({ message: "Invalid email" });
        }
        
        const salt = await bcrypt.genSalt(5)
        const hashedPassword = await bcrypt.hash(user.password, salt)
        const isvalidpassword = await bcrypt.compare(password, hashedPassword)
        if (!isvalidpassword) return res.status(401).json({ message: "Invalid password" });

        res.status(200).json({ message: "Login successful", data: user });
    } catch (err) {
        console.error("Error in AdminLogin:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};


const rufdata = (req, res)=> {
    res.send("i love you")
}



module.exports = { ragisteradmin, AdminLogin, rufdata }
