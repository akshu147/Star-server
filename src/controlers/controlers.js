const { addcolor } = require('./addcolor/addcolor')
const { loginadmin, AdminLogin } = require('./admin/login')
const { updateprofile } = require('./profile/profile')
const { addsize } = require('./size/addsize')
const { deletesize, deletemultiple } = require('./size/deletesize')
const { updatesize, getsize } = require('./size/updatesize')

// for admin
module.exports = {
  loginadmin,
  AdminLogin,

  //Controlle of add color
  addcolor,
  //controller of profile
  updateprofile,
  //size
  addsize,
  updatesize,
  getsize,
  deletesize,
  deletemultiple

}
