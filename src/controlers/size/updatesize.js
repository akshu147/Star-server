const addsizemodel = require("../../models/size/addsize");

// ✅ Get size by ID
const getsize = async (req, res) => {
    try {
        const { _id } = req.params; 
        console.log("Requested ID:", _id);

        // Fetch size by ID
        const response = await addsizemodel.findById(_id);
        
        if (!response) {
            return res.status(404).json({ message: "Size not found" });
        }

        console.log("Fetched Data:", response);

        res.status(200).json({ message: "Size Data fetched successfully", data: response });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// ✅ Update size by ID
const updatesize = async (req, res) => {
    try {
        const { _id } = req.params;
        const updatedData = req.body; 

        console.log("Updating ID:", _id);
        console.log("Updated Data:", updatedData);

        const response = await addsizemodel.findByIdAndUpdate(_id, updatedData, { new: true });

        if (!response) {
            return res.status(404).json({ message: "Size not found" });
        }

        res.status(200).json({ message: "Size data updated successfully" });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

module.exports = { getsize, updatesize };
