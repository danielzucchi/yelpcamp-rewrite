const campgroundPostService = require("../api-services/campgroundPostService")
const request = require("supertest")
const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const campgroundRoutes = require("../routes/campgroundPostRoute")

const mocks = require("./campgroundTestMocks")

server.use(bodyParser.json())
server.use(campgroundRoutes)

jest.mock("../api-services/campgroundPostService")

describe("Campground routes controller", () => {
  describe("Create campground feature", () => {
    it("Given the user requests to add a new campground, then create service gets called with campground details", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .send(mocks.testCampground)
        .then(() => {
          expect(campgroundPostService.createCampground).toHaveBeenCalledWith(
            mocks.testCampground
          )
        })
    })

    it("Given the user requests to add a campground, then the controller returns the created campground", () => {
      campgroundPostService.createCampground = jest.fn(() =>
        Promise.resolve(mocks.responseCampground)
      )

      return request(server)
        .post("/campgrounds")
        .send(mocks.testCampground)
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .then(response => {
          expect(response.statusCode).toBe(201)
          expect(response.body).toMatchObject(mocks.testCampground)
          expect(response.body._id).toBe("nfjdkshgkjre")
          expect(response.body.__v).toBe(0)
        })
    })
  })
  describe("Validation errors handling", () => {
    it("Given the user requests to add a campground missing a name field, then the controller returns an error", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampgroundMissingName)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.body[0]).toBe("name is required")
        })
    })

    it("Given the user requests to add a campground missing a price field, then the controller returns an error", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampgroundMissingPrice)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.body[0]).toBe("price is required")
        })
    })

    it("Given the user requests to add a campground missing a description field, then the controller returns an error", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampgroundMissingDescription)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.body[0]).toBe("description is required")
        })
    })

    it("Given the user requests to add a campground missing an image field, then the controller returns an error", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampgroundMissingImage)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.body[0]).toBe("image is required")
        })
    })

    it("Given the user requests to add a campground missing a location field, then the controller returns an error", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampgroundMissingLocation)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.body[0]).toBe("location is required")
        })
    })

    it("Given the user requests to add a campground missing a latitude field, then the controller returns an error", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampgroundMissingLatitude)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.body[0]).toBe("latitude is required")
        })
    })

    it("Given the user requests to add a campground missing a longitude field, then the controller returns an error", () => {
      campgroundPostService.createCampground = jest.fn()

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampgroundMissingLongitude)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.body[0]).toBe("longitude is required")
        })
    })

    it("When the service throws a ValidationError, then the controller returns a 412 status with an error message", () => {
      const error = new Error()
      error.name = "ValidationError"

      campgroundPostService.createCampground = jest.fn(() =>
        Promise.reject(error)
      )

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampground)
        .then(response => {
          expect(response.statusCode).toBe(412)
          expect(response.text).toBe("Missing or invalid field.")
        })
    })
  })

  describe("Internal server error handling", () => {
    it("When the service throws an exception, then the controller returns an internal server error status 500", () => {
      const error = new Error()
      error.name = "Generic Error"

      campgroundPostService.createCampground = jest.fn(() =>
        Promise.reject(error)
      )

      return request(server)
        .post("/campgrounds")
        .set("Accept", "application/json")
        .set("Content-Type", "application/json")
        .send(mocks.testCampground)
        .then(response => {
          expect(response.statusCode).toBe(500)
          expect(response.text).toBe("Internal server error.")
        })
    })
  })
})
