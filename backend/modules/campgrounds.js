import getAllCampgrounds from '../modules/graphql/campground';
const statusCode = require('http-status-codes');

const Campgrounds = {};

Campgrounds.getCampgrounds = async (req, res) => {
  await getAllCampgrounds().then(result => {
    if (result.errors) {
      res.status(statusCode.NOT_FOUND).send(result.errors);
    }

    res.status(statusCode.ACCEPTED).json(result);
  });
};

module.exports = Campgrounds;
