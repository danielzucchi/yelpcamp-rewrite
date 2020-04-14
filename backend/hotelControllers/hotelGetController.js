const httpStatus = require('http-status-codes');
const hotelGetService = require('../api-services/hotelGetService');

exports.getAllHotels = (req, res) => {
  hotelGetService
    .findAll()
    .then((foundHotels) => {
      if (!foundHotels || foundHotels.deleted == true) {
        res.status(404).send('No hotels found.');
      } else {
        res.status(httpStatus.OK).send(foundHotels);
      }
    })
    .catch((error) => {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send('Something went wrong.');
    });
};

exports.getHotelById = (req, res) => {
  hotelGetService
    .findHotelById(req.params.id)
    .then((foundHotel) => {
      if (!foundHotel) {
        res.status(httpStatus.NOT_FOUND).send('Hotel not found.');
      } else {
        res.status(200).send(foundHotel);
      }
    })
    .catch((error) => {
      if (error.message == 'INVALID_ID') {
        res.status(400).send('Invalid ID.');
      } else {
        res.status(500).send('Something went wrong.');
      }
    });
};
