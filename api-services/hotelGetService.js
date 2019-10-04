const Hotel = require("../models/hotelSchema")

const hotelGetService = {
  findAllHotels: function() {
    return Hotel.find({ deleted: false }).then(foundHotels => foundHotels)
  }
}

module.exports = hotelGetService
