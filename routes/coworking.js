const express = require("express");
const router = express.Router();
const { Cowork, validateCowork } = require("../models/cowork");

// POST : CREATE A NEW COWORKING SPACE DATA
router.post("/", async (req, res) => {
  const error = await validateCowork(req.body);

  if (error.message) res.status(400).send(error.message);

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
      longitude: req.body.longitude,
    },
  });

  cowork
    .save()
    .then((cowork) => {
      res.send(cowork);
    })
    .catch((error) => {
      res.status(500).send("Data was not stored in db");
    });
});

//GET ALL DATA COWORKING
router.get("/", (req, res) => {
  Cowork.find()
    .then((coworks) => res.send(coworks))
    .catch((error) => {
      res.status(500).send("Something went Wrong!");
    });
});

//GET DATA COWORKING BY ID
router.get("/:coworkId", async (req, res) => {
  const cowork = await Cowork.findById(req.params.coworkId);
  if(!cowork) res.status(404).send("Coworking Space not found")
  res.send(cowork)
});

//UPDATE BY ID
router.put("/:coworkId", async (req,res) => {
    const updateCowork = await Cowork.findByIdAndUpdate(req.params.coworkId, {
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
            longitude: req.body.longitude,
        },
    },{new: true}) 

    if(!updateCowork) res.status(404).send("Coworking Space not found")
    res.send(updateCowork)
})

//DELETE BASED ON ID
router.delete('/:coworkId', async (req,res) => {
    const cowork = await Cowork.findByIdAndRemove(req.params.coworkId)
    if(!cowork) res.status(404).send('coworking with id not found')
    res.send(cowork)
})
module.exports = router;
