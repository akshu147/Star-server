const { slidermodel } = require('../../models/slider/slider')

const addslider = async (req, res) => {
  try {
    const data = JSON.parse(JSON.stringify(req.body))
    if (!data) res.status(404).json({ message: 'Slider not found!' })
    data.sliderimg = req.file.filename
    console.log(data)
    const datatosave = new slidermodel(data)
    const responce = await datatosave.save()
    console.log(responce)
    res.status(200).json({ message: 'Successfully story added!' })
  } catch (err) {
    res.status(500).json({ message: 'Internal server error!' })
    console.log(err.message)
  }
}

const showslider = async (req, res) => {
  try {
    const responce = await slidermodel.find()
    const path = req.protocol + '://' + req.get('host') + '/uploads'
    res.status(200).json({
      message: 'Successfully data fetched!',
      data: responce,
      path: path
    })
  } catch (err) {
    res.status(404).json({ message: 'Internal server error!' })
  }
}

const deletesliderone = async (req, res) => {
  try {
    const id = req.params
    if (!id) res.status({ message: 'Id not found!' })
    const respnce = await slidermodel.deleteOne(id)
    console.log(respnce)
    res.status(200).json({ message: 'Successfully deleted' })
  } catch (err) {
    res.status(400).json({ message: 'internal server error!' })
  }
}

const deletemultipleslider = async (req, res) => {
  try {
    const ids = req.body
    if(!ids) res.status(404).json({message:"Id not found!"})
    const response = await slidermodel.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: 'Deleted successfully!', data:response })
  } catch (err) {
    res.status(400).json({ message: 'Internal server error!' })
  }
}
const getslider = async(req, res)=> {
    try {
        const paramid = req.params;
        if(!paramid)res.status(404).json({message:"Id not found!"})
        const responce = await slidermodel.findById(paramid);
        res.status(200).json({message:"Slider fetched!", data:responce})
    }
    catch(err){
        res.status(404).json({message:"Internal server error!"})
    }
}

module.exports = { addslider, showslider, deletesliderone, deletemultipleslider,getslider }
