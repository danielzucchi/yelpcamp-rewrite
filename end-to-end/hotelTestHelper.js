const Hotel = require("../models/hotelSchema")

const testHelper = {
  deleteHotelsByID: function(hotelList) {
    Hotel.deleteMany({ _id: { $in: hotelList } }).exec()
  }
}

module.exports = testHelper
