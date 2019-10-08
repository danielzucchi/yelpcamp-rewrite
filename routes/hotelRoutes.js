const express = require("express")
const router = express.Router()

//Requre Hotel controller modules
const hotelPostController = require("../controllers/hotelControllers/hotelPostController")

router.post("/hotels", hotelPostController.postHotel)

module.exports = router