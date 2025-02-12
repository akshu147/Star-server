const categorymodel = require('../../models/category/category')
const categetorymodel = require('../../models/category/category')
const path = require('path')

const addcategory = async (req, res) => {
  try {
    const data = JSON.parse(JSON.stringify(req.body))
    if (!data) res.status(404).json({ message: 'Data not found!' })
    const categoryimag = req.file.filename
    data.categoryimg = categoryimag
    console.log(data)
    const datatosave = new categetorymodel(data)
    const responce = await datatosave.save()
    console.log(responce)
    res.status(200).json({ message: 'successfully added category', data: data })
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Internal server error', error: err.message })
  }
}

const showparentcategory = async (req, res) => {
  try {
    const categorytoshow = await categetorymodel.find()
    const pathname = req.protocol + '://' + req.get('host') + '/uploads'
    res
      .status(200)
      .json({
        message: 'Data fetched',
        data: categorytoshow,
        pathname: pathname
      })
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: err.message })
  }
}
const deletecategoryone = async (req, res) => {
  try {
    console.log(req.params)
    const id = req.params
    if (!id) res.status(404).json({ message: 'Id not found!' })
    const responce = await categetorymodel.findByIdAndDelete(id)
    console.log(responce)
    res.status(200).json({ message: 'Successfully deleted!' })
  } catch (err) {
    res.status(500).json({ message: 'internal server error!' })
  }
}
const getcategory = async (req, res) => {
    try {
        const id = req.params
        if(!id) res.status(404).json({message:"Data not found!"})
        const responce = await categetorymodel.findById(id)
        res.status(200).json({message:"Updated category successfully!",data:responce})
    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
    }
}

const updatecategory = async(req, res)=> {
    try {
        const data = req.body;
        const updateid = req.params;
        if(!updateid) res.status(400).json({message:"Category Id is required!"})
        console.log(updateid)
        // console.log(data)
        const responce = await categorymodel.findByIdAndUpdate(updateid, data, { new: true });
        console.log(responce)


        
        res.status(200).json({message:"Update category successfully!"})
    }
    catch(err) {
        res.status(500).json({message:"Internal server error"})
        console.log(err.message)
    }
}

const deleteallcategory = async(req,res)=> {
    try{
        const data = req.body;
        console.log(data)
        const response = await categorymodel.deleteMany({ _id: { $in: data } });
        console.log(response)

        res.status(200).json({message:"Successfully deleted categories!", data:response})
    }
    catch(err) {
        res.status(400).json({message:"Internal server errir"})
        console.log(err.message)
    }
}

module.exports = { addcategory, showparentcategory, deletecategoryone, getcategory, updatecategory, deleteallcategory  }
