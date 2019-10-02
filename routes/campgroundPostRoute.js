const express = require("express")
const router = express.Router()
const httpStatus = require("http-status-codes")
const campgroundPostService = require("../api-services/campgroundPostService")
const validationService = require("../services/validationService")

router.post("/campgrounds", (req, res) => {
  const validationResult = validationService(req.body)
  if (validationResult.length > 0) {
    return res.status(httpStatus.PRECONDITION_FAILED).send(validationResult)
  }

  campgroundPostService
    .createCampground(req.body)
    .then(createdCampground => {
      res.status(httpStatus.CREATED).send(createdCampground)
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
