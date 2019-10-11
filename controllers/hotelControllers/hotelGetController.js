const httpStatus = require("http-status-codes")
const hotelGetService = require("../../api-services/hotelGetService")

exports.getAllHotels = (req, res) => {
  hotelGetService
    .findAll()
    .then(foundHotels => {
      res.status(httpStatus.OK).send(foundHotels)
    })
    .catch(error => {
      console.log(error)
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Something went wrong.")
    })
}
