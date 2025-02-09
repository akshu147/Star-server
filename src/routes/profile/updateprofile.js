const express = require("express");
const { updateprofile } = require("../../controlers/controlers");
const mymulter = require("../../middelwere/multer");

const profileroute = express.Router();

// Apply Multer Middleware Directly
profileroute.put(
  "/update-profile",
  mymulter.fields([
    { name: "logo", maxCount: 1 },
    { name: "sublogo", maxCount: 1 }
  ]),
  updateprofile
);

module.exports = { profileroute };
