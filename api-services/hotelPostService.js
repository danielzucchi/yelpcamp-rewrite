const Hotel = require("../models/hotelSchema")

const hotelPostService = {
  createHotel: function(hotel) {
    return Hotel.create(hotel)
      .then(newHotel => newHotel)
      .catch(err => {
        if (err.name == "ValidationError") {
          throw new Error(err.message)
        } else {
          throw new Error("Generic Error")
        }
      })
  }
}

module.exports = hotelPostService
