const express = require("express")
const router = express.Router()
const hotelPostController = require("../controllers/hotelPostController")

router.post("/hotels", hotelPostController.postHotel)

module.exports = router
