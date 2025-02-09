const { clrmodel } = require("../../models/add-color/colormodel");

const addcolor = async (req, res) => {
    try {
        const data = req.body;
        const datatosave = new clrmodel(data);
        const response = await datatosave.save();

        const alldata = await clrmodel.find(); 

        res.status(200).json({
            message: `Successfully color added ${response}`,
            data: alldata
        });
    } catch (err) {
        res.status(400).json({
            message: "Server error",
            error: err.message // Provide the error message
        });
        // console.log(err.message)
    }
};

module.exports = { addcolor };
