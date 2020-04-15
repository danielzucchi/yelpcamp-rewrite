const express = require('express');
const router = express.Router();
const Campground = require('../modules/campgrounds');

router.get('/campgrounds', Campground.getAllCampgrounds);

module.exports = router;
