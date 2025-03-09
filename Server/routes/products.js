const {Category}= require ('../models/category.js');
const {Product}= require('../models/products.js');
const express= require('express');
const router= express.Router();


const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
});


//get all start
router.get(`/`, async (req, res) => {
    const productList = await Product.find().populate("category");

    if (!productList) {
        res.status(500).json({ success: false })

    }
    res.send(productList);
});
//get all end

// get id start
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(500).json({ message: 'The product with the given ID was not found.' })
    }
    return res.status(200).send(product);
})
// get id end 

// create start

router.post(`/create`, async (req, res)=>{

    const category = await Category.findById(req.body.category);
    if(!category){
        return res.status(404).send("invalid Category");
    }
    // upload img cloud start
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
    // upload img cloud end
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        images: imgurl,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating, 
        numReviews: req.body.numReviews ,
        isFeatured: req.body.isFeatured,
        dateCreated: req.body.dateCreated,
    });

    product = await product.save();

    if(!product){
        res.status(500).json({
            error: err,
            success: false
        })
    }

    res.status(201).json(product)

})
// create end


// delete start
router.delete(`/:id`, async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
        res.status(404).json({
            message: 'product not found',
            success: false
        })
    }
    res.status(200).json({
        success: true,
        message: 'product Deleted!'
    })
})
// delete end

// update start
router.put('/:id', async (req, res) => {
    //upload img cloud start
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
    //upload img cloud end 
    
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
        name: req.body.name,
        description: req.body.description,
        images: imgurl,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating, 
        numReviews: req.body.numReviews ,
        isFeatured: req.body.isFeatured,
        dateCreated: req.body.dateCreated,
        },
        { new: true }
    )
    if (!product) {
        res.status(404).json({
            message: 'Category cannot be updated!',
            success: false
        })
    }
    res.status(200).json({
        message: 'the product is updated',
        status: true
    })
    // res.send(product);
})
// update end
module.exports = router;