const express = require("express");
const router = express.Router();
const { Booking, validateBooking} = require('../models/booking')

const verifyToken = require('../routes/verifyToken')

//POST
router.post("/", async (req, res) => {
    const error = await validateBooking(req.body);
  
    if (error.message) res.status(400).send(error.message);
  
    booking = new Booking({
      name: req.body.name,
      address: req.body.address,
      namaLengkap: req.body.namaLengkap,
      email: req.body.email,
      noTelp: req.body.noTelp,
      tanggal: req.body.tanggal,
      tamu: req.body.tamu,
      durasi: req.body.durasi,
      pesan: req.body.pesan
    });
  
    booking
      .save()
      .then((booking) => {
        res.send(booking);
      })
      .catch((error) => {
        res.status(500).send("Data was not stored in db");
      });
  });

//GET ALL DATA COWORKING
router.get("/", verifyToken, (req, res) => {
    Booking.find()
    .then((bookings) => res.send(bookings))
    .catch((error) => {
      res.status(500).send("Something went Wrong!");
    });
});

//GET DATA COWORKING BY ID
router.get("/:bookingId", async (req, res) => {
  const booking = await Booking.findById(req.params.bookingId);
  if(!booking) res.status(404).send("bookinging data not found")
  res.send(booking)
});


  module.exports = router;