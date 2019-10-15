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

    describe("Error handling", () => {
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

      it("Given the user requests hotels that have been deleted, then the service returns a 404 Not Found error", () => {
        hotelGetService.findAll = jest.fn(() => Promise.resolve(null))

        return request(server)
          .get("/hotels")
          .then(response => {
            expect(response.statusCode).toBe(404)
            expect(response.text).toBe("No hotels found.")
          })
      })
    })
  })

  describe("Get hotel by id route", () => {
    it("Given the user calls the route/controller with a hotel id, then that hotel is returned", () => {
      hotelGetService.findHotelById = jest.fn(() =>
        Promise.resolve(hotelTestMocks.responseHotel)
      )

      return request(server)
        .get("/hotels/5da44ad81d0c1e0a5acb6a22")
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body).toMatchObject({
            _id: "5da44ad81d0c1e0a5acb6a22",
            name: "Test Hotel",
            price: "£40",
            image: "http://sample.jpg",
            description: "Lorem ipsum",
            location: "Lake District",
            latitude: 1234,
            longitude: 4321,
            deleted: false,
            __v: 0
          })
          expect(response.body._id).toBe("5da44ad81d0c1e0a5acb6a22")
          expect(response.body.__v).toBe(0)
        })
    })

    describe("Error handling", () => {
      it("Given the user requests a hotel with a non-existent ID, then the service returns a 404 Not Found error", () => {
        hotelGetService.findHotelById = jest.fn(() => Promise.resolve(null))

        return request(server)
          .get("/hotels/5da44ad81d0c1e0a5acb6a23")
          .then(response => {
            expect(response.statusCode).toBe(404)
            expect(response.text).toBe("Hotel not found.")
          })
      })

      it("Given the user tries to find a hotel with an ID, and the ID is in an invalid format and the Get service returns an Invalid ID error, the the controller returns that error", () => {
        const error = new Error("INVALID_ID")
        hotelGetService.findHotelById = jest.fn(() => Promise.reject(error))

        return request(server)
          .get("/hotels/anything")
          .then(response => {
            expect(response.statusCode).toBe(400)
            expect(response.text).toBe("Invalid ID.")
          })
      })

      it("Given the server throw an internal error, then the controller returns that error", () => {
        const error = new Error("GENERIC_ERROR")
        hotelGetService.findHotelById = jest.fn(() => Promise.reject(error))

        return request(server)
          .get("/hotels/anything")
          .then(response => {
            expect(response.statusCode).toBe(500)
            expect(response.text).toBe("Something went wrong.")
          })
      })
    })
  })
})
