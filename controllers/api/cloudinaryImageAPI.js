const router = require('express').Router
const cloudinary  = require('../../multer/cloudinary')
const upload = require('../../multer/multer')


const cloudinaryRouter =router.post('/' , upload.single('image'), async(req, res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        res.json(result)
    } catch (error) {
       console.log(error) 
    }
})

module.exports = cloudinaryRouter;