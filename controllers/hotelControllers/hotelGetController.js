const httpStatus = require("http-status-codes")
const hotelGetService = require("../../api-services/hotelGetService")

exports.getAllHotels = (req, res) => {
  hotelGetService.findAll({ deleted: false }).then(foundHotels => {
    res.status(httpStatus.OK).send(foundHotels)
  })
}
