const mongoose = require("mongoose")
const Schema = mongoose.Schema

const campgroundSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  deleted: { type: Boolean, default: false }
})

const Campground = mongoose.model("Campground", campgroundSchema)

module.exports = Campground
