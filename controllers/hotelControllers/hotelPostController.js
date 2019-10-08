const httpStatus = require("http-status-codes")
const hotelPostService = require("../../api-services/hotelPostService")
const validate = require("../../services/validationService")

exports.postHotel = (req, res) => {
  // Can I extract this function back to validationService?
  const validationResult = validate(req.body)
  if (validationResult.length > 0) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validationResult)
  }

  hotelPostService
    .createHotel(req.body)
    .then(createdHotel => {
      res.status(httpStatus.CREATED).send(createdHotel)
    })
    .catch(err => {
      if (err.name == "ValidationError") {
        res
          .status(httpStatus.UNPROCESSABLE_ENTITY)
          .send("Missing or invalid field.")
      } else {
        res.status(500).send("Internal server error.")
      }
    })
}