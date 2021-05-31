const mongoose = require('mongoose')
const yup = require('yup');

// COWORKING SCHEMA
const bookingSchema = mongoose.Schema({
    name : {
        type: String,
        minlength: 3,
        maxlength:100
    },
    address : {
        type: String
    },
    namaLengkap : {
        type: String,
    },
    email : {
        type: String,
    },
    noTelp : {
        type: String,
    },
    tanggal : {
        type: String,
    },
    tamu : {
        type: String,
    },
    durasi : {
        type: String,
    },
   pesan : {
        type: String,
    },
})

const validateBooking = booking => {
    const schema = yup.object().shape({
        name: yup.string().min(3).max(100),
        address: yup.string(),
        namaLengkap: yup.string(),
        email: yup.string(),
        noTelp: yup.string(),
        tanggal: yup.string(),
        tamu: yup.string(),
        durasi: yup.string(),
        pesan : yup.string(),

    })
    return schema
    .validate(booking)
    .then((booking) => booking)
    .catch(error => {
        return {
            message:error.message
        }
    })
}

exports.Booking = new mongoose.model('Booking', bookingSchema);
exports.validateBooking = validateBooking;