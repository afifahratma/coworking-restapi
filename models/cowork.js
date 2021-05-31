const mongoose = require('mongoose')
const yup = require('yup');

// COWORKING SCHEMA
const coworkSchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
        minlength: 3,
        maxlength:100
    },
    image : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true,
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
    },
    open : {
        type: String,
    },
    close : {
        type: String,
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

const validateCowork = cowork => {
    const schema = yup.object().shape({
        name: yup.string().required().min(3).max(100),
        image: yup.string().required(),
        price: yup.number().required(),
        address: yup.string().required(),
        district: yup.string().required(),
        city: yup.string().required(),
        fasilitas: yup.string().required(),
        phone: yup.string(),
        open: yup.string(),
        close: yup.string(),
        latitude: yup.number().required(),
        longitude: yup.number().required(),
    })
    return schema
    .validate(cowork)
    .then((cowork) => cowork)
    .catch(error => {
        return {
            message:error.message
        }
    })
}

exports.Cowork = new mongoose.model('Cowork', coworkSchema);
exports.validateCowork = validateCowork;