const getAllCampgrounds = require('../modules/graphql/campground');

const Campgrounds = {};

Campgrounds.getAllCampgrounds = async (req, res) => {
  const result = await getAllCampgrounds();

  res.send(result);
};

module.exports = Campgrounds;
