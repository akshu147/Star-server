const addsizemodel = require("../../models/size/addsize");

const addsize = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const datatosave = new addsizemodel(data);
        const response = await datatosave.save();
        res.status(200).json({ message: "Size added successfully", data: response });
    } 
    catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "Size already exists!", errorCode: 11000 });
        }
        res.status(500).json({ message: "Internal server error", error: err.message });
        console.log(err.message)
    }
};

module.exports = { addsize };
