const addsizemodel = require("../../models/size/addsize");

const deletesize = async (req, res) => {
  try {
    const { _id } = req.params; 
    console.log(_id)
    if (!_id) {
      return res.status(404).json({ message: "ID not found" });
    }
    console.log("Deleting ID:", _id);

    const response = await addsizemodel.deleteOne(req.params);

   res.status(200).json({ message: "Successfully deleted size", data:response });
  } catch (err) {
    console.error("Error in deletesize:", err);
    res.status(500).json({ message: "Internal server error!" });
  }
};

const deletemultiple = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ message: "There is no size available!" });
    }

    console.log("Deleting multiple IDs:", data);

    const response = await addsizemodel.deleteMany({ _id: { $in: data } });

    if (response.deletedCount === 0) {
      return res.status(404).json({ message: "No sizes found to delete" });
    }

    res.status(200).json({ message: "Successfully deleted", deletedCount: response.deletedCount });
  } catch (err) {
    console.error("Error in deletemultiple:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { deletesize, deletemultiple };
