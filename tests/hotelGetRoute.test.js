const hotelGetService = require("../api-services/hotelGetService")
const request = require("supertest")
const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const hotelRoutes = require("../routes/hotelRoutes")

const hotelTestMocks = require("./hotelTestMocks")

server.use(bodyParser.json())
server.use(hotelRoutes)

jest.mock("../api-services/hotelGetService")

describe("Hotel get controller", () => {
  describe("Get all hotels feature", () => {
    it("Given the user requests all hotels in db, then service gets called", () => {
      hotelGetService.findAll = jest.fn(() =>
        Promise.resolve(hotelTestMocks.responseAllHotels)
      )

      return request(server)
        .get("/hotels")
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toMatchObject([
            {
              name: "Test Hotel",
              price: "£40",
              image: "http://sample.jpg",
              description: "Lorem ipsum",
              location: "Lake District",
              latitude: 1234,
              longitude: 4321,
              deleted: false
            },
            {
              name: "Test Hotel2",
              price: "£42",
              image: "http://sample.jpg",
              description: "Lorem ipsum",
              location: "Lake District",
              latitude: 1234,
              longitude: 4321,
              deleted: false
            }
          ])
        })
    })
  })
})
