const Campground = require("../models/campgroundSchema")

const campgroundPostService = {
  createCampground: function createCampground(campground) {
    return Campground.create(campground)
      .then(newCampground => newCampground)
      .catch(err => {
        if (err.name == "ValidationError") {
          throw new Error(err.message)
        } else {
          throw new Error("Generic Error")
        }
      })
  }
}

module.exports = campgroundPostService
