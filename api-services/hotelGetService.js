const Hotel = require("../models/hotelSchema")

const hotelGetService = {
  findAll: function() {
    return Hotel.find({ deleted: false })
      .then(foundHotels => foundHotels)
      .catch(error => {
        console.log("GENERIC_ERRROR")
        throw new Error("GENERIC_ERROR")
      })
  },

  findHotelById: function(id) {
    return Hotel.findById(id)
      .then(foundHotel => {
        if (!foundHotel || foundHotel.deleted) {
          return new Error("NOT_FOUND")
        }
        return foundHotel
      })
      .catch(error => {
        if (error.name == "CastError") {
          throw new Error("INVALID_ID")
        } else {
          throw new Error("GENERIC_ERROR")
        }
      })
  }
}

module.exports = hotelGetService
