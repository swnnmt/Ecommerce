const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    images:[
        {
            type: String,
            require: true
        }
    ],
    brand: {
        type: String,
        default:''
    },
    price:{
        type:Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    countInStock:{
        type: Number,
        require: true,
    },
    rating:{
        type: Number, 
        default: 0,
    },
    numReviews: {
        type: Number, 
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }

})
exports.Product = mongoose.model(`Product`,productSchema)