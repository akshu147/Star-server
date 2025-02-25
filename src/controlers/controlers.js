const { addcolor } = require('./addcolor/addcolor')
const { loginadmin, AdminLogin } = require('./admin/login')
const {
  addcategory,
  deletecategoryone,
  updatecategory
} = require('./category/category')
const { addproductcat, showproductcat, deleteProcutCatOne, deleteallproductcat, getproductcat, Updadateproductcat } = require('./productcat/productcat')
const { updateprofile } = require('./profile/profile')
const { addsize } = require('./size/addsize')
const { deletesize, deletemultiple } = require('./size/deletesize')
const { updatesize, getsize } = require('./size/updatesize')
const { addslider, deletemultipleslider, showslider, deletesliderone, getslider } = require('./slider/slider')

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
  deletemultiple,
  //category
  addcategory,
  deletecategoryone,
  updatecategory,
  //slider
  addslider,
  deletemultipleslider,
  showslider,
  deletesliderone,
  getslider,
  //product category
  addproductcat,
  showproductcat,
  deleteProcutCatOne,
  deleteallproductcat,
  getproductcat,
  Updadateproductcat

}
