const express = require('express');
const router = express.Router();
const Cowork = require('../models/cowork')

// POST : CREATE A NEW COWORKING SPACE DATA
router.post('/', (req,res) => {
    cowork = new Cowork({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        address: req.body.address,
        district: req.body.district,
        city: req.body.city,
        fasilitas: req.body.fasilitas,
        open: req.body.open,
        close: req.body.close,
        phone: req.body.phone,
        region: {
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }
    })

    cowork.save().then((cowork) => {
        res.send(cowork);
    }).catch(error => {
        res.status(500).send("Data was not stored in db")
    })
})

module.exports = router;