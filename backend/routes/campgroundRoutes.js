const express = require('express');
const router = express.Router();
const Campgrounds = require('../modules/campgrounds');

router.get('/content/campgrounds', Campgrounds.getCampgrounds);

module.exports = router;
