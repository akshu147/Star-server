const multer = require("multer");
const path = require("path");

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "src/uploads"); // Ensure "src/uploads" folder exists
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname)
        
        cb(null, Date.now()+Math.floor(Math.random() * 90999)+extname); 
    }
});

// Initialize Multer
const mymulter = multer({storage:storage})

module.exports = mymulter; // Export for use in routes
