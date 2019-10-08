const express = require("express")
const router = express.Router()

//Requre Hotel controller modules
const hotelPostController = require("../controllers/hotelControllers/hotelPostController")

const hotelGetController = require("../controllers/hotelControllers/hotelGetController")

// Hotel routes
router.post("/hotels", hotelPostController.postHotel)

router.get("/hotels", hotelGetController.getAllHotels)

module.exports = router
