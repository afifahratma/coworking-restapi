const mongoose = require('mongoose')


// COWORKING SCHEMA
const coworkSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    image : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true,
        minlength: 3,
        maxlength: 10
    },
    address : {
        type: String,
        required : true
    },
    district : {
        type: String,
        required : true
    },
    city : {
        type: String,
        required : true
    },
    fasilitas : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required : false
    },
    open : {
        type: String,
        required : false
    },
    close : {
        type: String,
        required : false
    },
    region : {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        }
    }
})

module.exports = new mongoose.model('Cowork', coworkSchema)