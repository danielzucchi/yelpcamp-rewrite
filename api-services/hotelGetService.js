const Hotel = require("../models/hotelSchema")

const hotelGetService = {
  findAll: function() {
    return Hotel.find({ deleted: false })
      .then(foundHotels => {
        if (!foundHotels || foundHotels.deleted == true) {
          console.log("No hotels found.")
          return new Error("NOT_FOUND")
        }
        return foundHotels
      })
      .catch(error => {
        throw new Error("GENERIC_ERROR")
      })
  },

  findHotelById: function(id) {
    return Hotel.findById(id)
      .then(foundHotel => {
        if (!foundHotel || foundHotel.deleted == true) {
          console.log("No hotels found.")
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
