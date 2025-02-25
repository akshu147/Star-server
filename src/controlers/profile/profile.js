const { response } = require('express');
const { updateProfileModel } = require('../../models/profile/updateprofile');

const updateprofile = async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const response = await updateProfileModel.find()

  

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err.message}` });
    console.log(err.message)
  }
};

module.exports = { updateprofile }; 
