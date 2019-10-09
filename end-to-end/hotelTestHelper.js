const Hotel = require("../models/hotelSchema")

const testHelper = {
  deleteHotelsByID: function(hotelList) {
    Hotel.deleteMany({ _id: { $in: hotelList } }).exec()
  },

  insertTestHotelInDB: async hotel => {
    const createdHotel = await Hotel.create(hotel)
    return createdHotel._id
  }
}

module.exports = testHelper
