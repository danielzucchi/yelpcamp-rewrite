const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const server = express()
const campgroundRoutes = require("./routes/campgroundPostRoute")

server.use(bodyParser.json())

// const db = require("./config/keys").mongoURI
const dbURI = "mongodb://localhost/yelpcamp"

mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then(() => console.log("Mongo connected."))
  .catch(err => console.log(err))

server.use(campgroundRoutes)

server.get("/home", (req, res) => res.send("This is the home page."))

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server started on ${port}.`))
