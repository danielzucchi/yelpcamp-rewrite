const express = require('express');
const router = express.Router();
const Campgrounds = require('../modules/campgrounds');

router.get('/campgrounds', Campgrounds.getCampgrounds);

module.exports = router;
