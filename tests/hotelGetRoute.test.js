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

describe("Hotel getAll controller", () => {
  describe("Get all hotels feature", () => {
    it("Given the user requests to find all hotels, then service gets called and responds with found hotels", () => {
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

    it("Given the user requests hotels but the service returns an error, then controller returns the error", () => {
      const error = new Error("GENERIC_ERROR")
      hotelGetService.findAll = jest.fn(() => Promise.reject(error))

      return request(server)
        .get("/hotels")
        .then(response => {
          expect(response.statusCode).toBe(500)
          expect(response.text).toBe("Something went wrong.")
        })
    })
  })
})
