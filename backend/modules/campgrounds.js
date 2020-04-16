import getAllCampgrounds from '../modules/graphql/campground';
const statusCode = require('http-status-codes');

const Campgrounds = {};

Campgrounds.getAllCampgrounds = async (req, res) => {
  const result = await getAllCampgrounds();

  if (result.errors) {
    res.status(statusCode.NOT_FOUND).send(result.errors);
  }

  res.status(statusCode.ACCEPTED).send(result);
};

module.exports = Campgrounds;
