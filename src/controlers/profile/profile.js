const { updateProfileModel } = require('../../models/profile/updateprofile');

const updateprofile = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id & update fields

    if (!id) {
      return res.status(400).json({ message: 'ID is required to update profile' });
    }

    // Find and update the profile
    const updatedProfile = await updateProfileModel.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', data: updatedProfile });
  } catch (err) {
    res.status(500).json({ message: `Internal Server Error: ${err.message}` });
  }
};

module.exports = { updateprofile };
