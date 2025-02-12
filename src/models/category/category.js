const { default: mongoose } = require("mongoose");

const categoryschema = new mongoose.Schema({
    categoryname: { // ✅ Fixed spelling mistake
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    status: { // ✅ Added `type: String`
        type: String,
        enum: ['hide', 'display'], 
        required: true
    },
    categoryimg: {
        type: String,
    }
}, { timestamps: true });

const categorymodel = mongoose.model("categories", categoryschema); // ✅ Fixed model name
module.exports = categorymodel;
