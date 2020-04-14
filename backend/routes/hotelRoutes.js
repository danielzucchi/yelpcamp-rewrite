const express = require('express');
const router = express.Router();
const hotelPostController = require('../controllers/hotelControllers/hotelPostController');
const hotelGetController = require('../controllers/hotelControllers/hotelGetController');

router.post('/hotels', hotelPostController.postHotel);

router.get('/hotels', hotelGetController.getAllHotels);

router.get('/hotels/:id', hotelGetController.getHotelById);

module.exports = router;
