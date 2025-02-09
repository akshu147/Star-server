const addsizemodel = require("../../models/size/addsize")

const showsize = async(req, res)=> {
    try {
        const allsize = await addsizemodel.find()
        console.log(allsize)
        res.status(200).json({message:"successfully data fetched", data:allsize})

    }
    catch(err){
        res.status(404).json({message:"dota not found"})
    }
}
module.exports = {showsize}