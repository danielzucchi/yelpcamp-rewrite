const express = require("express")
const router = express.Router()
const httpStatus = require("http-status-codes")
const hotelPostService = require("../api-services/hotelPostService")
const validationService = require("../services/validationService")

router.post("/hotels", (req, res) => {
  const validationResult = validationService(req.body)
  if (validationResult.length > 0) {
    return res.status(httpStatus.PRECONDITION_FAILED).send(validationResult)
  }

  hotelPostService
    .createHotel(req.body)
    .then(createdHotel => {
      res.status(httpStatus.CREATED).send(createdHotel)
    })
    .catch(err => {
      if (err.name == "ValidationError") {
        res
          .status(httpStatus.PRECONDITION_FAILED)
          .send("Missing or invalid field.")
      } else {
        res.status(500).send("Internal server error.")
      }
    })
})

module.exports = router
