const hotelPostService = require("../api-services/hotelPostService")
const request = require("supertest")
const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const hotelRoutes = require("../routes/hotelRoutes")

const mocks = require("./hotelTestMocks")

server.use(bodyParser.json())
server.use(hotelRoutes)

jest.mock("../api-services/hotelPostService")

describe("Hotel routes controller", () => {
  describe("Create hotel feature", () => {
    it("Given the user requests to add a new hotel, then create service gets called with hotel details", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .send(mocks.testHotel)
        .then(() => {
          expect(hotelPostService.createHotel).toHaveBeenCalledWith(
            mocks.testHotel
          )
        })
    })

    it("Given the user requests to add a hotel, then the controller returns the created hotel", () => {
      hotelPostService.createHotel = jest.fn(() =>
        Promise.resolve(mocks.responseHotel)
      )

      return request(server)
        .post("/hotels")
        .send(mocks.testHotel)
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .then(response => {
          expect(response.statusCode).toBe(201)
          expect(response.body).toMatchObject({
            name: "Test Hotel",
            price: "£40",
            image: "http://sample.jpg",
            description: "Lorem ipsum",
            location: "Lake District",
            latitude: 1234,
            longitude: 4321,
            deleted: false
          })
          expect(response.body._id).toBe("5da44ad81d0c1e0a5acb6a22")
          expect(response.body.__v).toBe(0)
        })
    })
  })
  describe("Validation errors handling", () => {
    it("Given the user requests to add a hotel missing a name field, then the controller returns an error", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotelMissingName)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.body[0]).toBe("name is required")
        })
    })

    it("Given the user requests to add a hotel missing a price field, then the controller returns an error", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotelMissingPrice)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.body[0]).toBe("price is required")
        })
    })

    it("Given the user requests to add a hotel missing a description field, then the controller returns an error", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotelMissingDescription)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.body[0]).toBe("description is required")
        })
    })

    it("Given the user requests to add a hotel missing an image field, then the controller returns an error", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotelMissingImage)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.body[0]).toBe("image is required")
        })
    })

    it("Given the user requests to add a hotel missing a location field, then the controller returns an error", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotelMissingLocation)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.body[0]).toBe("location is required")
        })
    })

    it("Given the user requests to add a hotel missing a latitude field, then the controller returns an error", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotelMissingLatitude)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.body[0]).toBe("latitude is required")
        })
    })

    it("Given the user requests to add a hotel missing a longitude field, then the controller returns an error", () => {
      hotelPostService.createHotel = jest.fn()

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotelMissingLongitude)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.body[0]).toBe("longitude is required")
        })
    })

    it("When the service throws a ValidationError, then the controller returns a 422 status with an error message", () => {
      const error = new Error()
      error.name = "ValidationError"

      hotelPostService.createHotel = jest.fn(() => Promise.reject(error))

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotel)
        .then(response => {
          expect(response.statusCode).toBe(422)
          expect(response.text).toBe("Missing or invalid field.")
        })
    })
  })

  describe("Internal server error handling", () => {
    it("When the service throws an exception, then the controller returns an internal server error status 500", () => {
      const error = new Error()
      error.name = "Generic Error"

      hotelPostService.createHotel = jest.fn(() => Promise.reject(error))

      return request(server)
        .post("/hotels")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testHotel)
        .then(response => {
          expect(response.statusCode).toBe(500)
          expect(response.text).toBe("Internal server error.")
        })
    })
  })
})
