const Hotel = require("../models/hotelSchema")

const hotelGetService = {
  findAllHotels: function() {
    return Hotel.find({ deleted: false })
      .then(foundHotels => {
        console.log("Success")
        foundHotels
      })
      .catch(error => {
        console.log("Error")
        throw new Error(error, "NOT_FOUND")
      })
  }
}

module.exports = hotelGetService
