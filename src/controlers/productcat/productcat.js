const { productcatmodel } = require('../../models/productcat/productcat')

const addproductcat = async (req, res) => {
  try {
    const data = JSON.parse(JSON.stringify(req.body))
    if (!data) res.status(404).JSON({ message: 'Data not found!' })
    data.categoryImg = req.file.filename
    console.log(data)
    const datatosave = new productcatmodel(data)
    const responce = await datatosave.save()
    res
      .status(200)
      .json({ message: 'Successfully added product category!', data: responce })
  } catch (err) {
    res.status(500).json({ message: `Internal server error`, err: err.message })
    console.log(err.message)
  }
}

const showproductcat = async (req, res) => {
  try {
    const responce = await productcatmodel.find()
    if (!responce) res.status(404).json({ message: 'Data not found1' })
    const pathname = req.protocol + '://' + req.get('host') + '/uploads'
    res
      .status(200)
      .json({ message: 'Data fetched!', data: responce, imagepath: pathname })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error!' })
    console.log(err.message)
  }
}
const deleteProcutCatOne = async (req, res) => {
  try {
    if (!req.params) res.status(404).json({ message: 'ID not found!' })
    const responce = await productcatmodel.deleteOne(req.params)
    res.status(200).json({ message: 'Category deleted!', data: responce })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error!' })
    console.log(err.message)
  }
}
const deleteallproductcat = async (req, res) => {
  try {
    const data = req.body;
    if (!req.body) res.status(404).json({ message: 'Id array not found!' })
    const response = await productcatmodel.deleteMany({ _id: { $in: data } })
    console.log(response)

    res.status(200).json({ message: 'Successfully deleted all categories!', data:response })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error!' })
    console.log(err.message)
  }
}
const getproductcat = async(req,res)=> {
  try {
    const params = req.params;
    if(!params) res.status(404).json({message:"Category id not found!"})
    const responce = await productcatmodel.findOne(params)
    console.log(responce)
    res.status(200).json({message:"Category fetched!", data:responce})
  }
  catch(err) {
    res.status(500).json({message:"Internal server error!"})
    console.log(err.message)
  }
}
const Updadateproductcat = async(req,res)=> {
  try{
    const data = req.body;
    const updateid = req.params
    if(!updateid) req.status(404).json({message:"Id not found!"})
    const responce = await productcatmodel.findByIdAndUpdate(updateid, data, { new: true });
    res.status(200).json({message:"Product category updated!", data:responce})
  }
  catch(err) {
    res.status(500).json({message:"Internal server error!"})
  }
}
module.exports = {
  addproductcat,
  showproductcat,
  deleteProcutCatOne,
  deleteallproductcat,
  getproductcat,
  Updadateproductcat
}
