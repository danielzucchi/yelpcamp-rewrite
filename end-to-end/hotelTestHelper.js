const Hotel = require("../models/hotelSchema")

const testHelper = {
  deleteHotelsByID: function(hotelList) {
    Hotel.deleteMany({ _id: { $in: hotelList } }).exec()
  },

  insertTestHotelInDB: async hotel => {
    const createdHotel = await Hotel.create(hotel)
    return createdHotel._id
  }

  // getNonDeletedHotelsIdsFromDB: async () => {
  //   const allHotels = await Hotel.find({ deleted: false }).exec()
  //   allHotels.forEach(function(hotel) {
  //     console.log(hotel._id)
  //   })
}

module.exports = testHelper
