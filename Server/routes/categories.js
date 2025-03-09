const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();
// const app = express();

// app.use(express.json()); // Giúp server parse JSON
// app.use(express.urlencoded({ extended: true })); // Hỗ trợ dữ liệu form


const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
});



//get all
router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({ success: false })

    }
    res.send(categoryList);
});
// get all end

//get id start
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        res.status(500).json({ message: 'The category with the given ID was not found.' })
    }
    return res.status(200).send(category);
})
// get id end

// delete start
router.delete(`/:id`, async (req, res) => {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    if (!deletedCategory) {
        res.status(404).json({
            message: 'category not found',
            success: false
        })
    }
    res.status(200).json({
        success: true,
        message: 'Category Deleted!'
    })
})
// delete end


// create start
router.post('/create', async (req, res) => {

    const limit = pLimit(2);
    const imagesToUpLoad = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result
        })
    });

    const uploadStatus = await Promise.all(imagesToUpLoad);
    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: "image cannot upload",
            status: false
        })
    }


    let category = new Category({
        name: req.body.name,
        images: imgurl,
        color: req.body.color
    });

    if (!category) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
    category = await category.save()
    res.status(201).json(category);


})
// create end

//update start
router.put('/:id', async (req, res) => {
    const limit = pLimit(2);
    const imagesToUpLoad = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result
        })
    });

    const uploadStatus = await Promise.all(imagesToUpLoad);
    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: "image cannot upload",
            status: false
        })
    }

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            images: imgurl,
            color: req.body.color
        },
        { new: true }
    )
    if (!category) {
        return res.status(500).json({
            message: 'Category cannot be updated!',
            success: false
        })
    }
    res.send(category);
})
//update end
module.exports = router;
