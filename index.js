const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const server = express()
const hotelRoutes = require("./routes/hotelPostRoute")

server.use(bodyParser.json())

// const db = require("./config/keys").mongoURI
const dbURI = "mongodb://localhost/hotelreviews"

mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => console.log("Mongo connected."))
  .catch(err => console.log(err))

server.use(hotelRoutes)

server.get("/home", (req, res) => res.send("This is the home page."))

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server started on ${port}.`))
