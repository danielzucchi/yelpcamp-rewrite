const Hotel = require("../models/hotelSchema")

const hotelGetService = {
  findAll: function() {
    return Hotel.find({ deleted: false })
      .then(foundHotels => {
        return foundHotels
      })
      .catch(error => {
        throw new Error("GENERIC_ERROR")
      })
  }
}

module.exports = hotelGetService
