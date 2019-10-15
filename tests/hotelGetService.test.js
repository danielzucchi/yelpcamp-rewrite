const testHelperFunctions = require("./testHelperFunctions")
const hotelMocks = require("./hotelTestMocks")

describe("Find hotels service", () => {
  describe("FindAll hotels service", () => {
    beforeEach(() => {
      jest.resetModules()
    })

    it("Given the findAll service is called, then Mongo find function is called with params", async () => {
      const mockModelFindAll = jest.fn(() => Promise.resolve())

      jest.setMock("../models/hotelSchema", {
        find: mockModelFindAll
      })

      const hotelGetService = require("../api-services/hotelGetService")

      await hotelGetService.findAll()

      expect(mockModelFindAll).toHaveBeenCalledWith({ deleted: false })
    })

    it("Given the findAll service us called, then it returns a list of hotels provided by the Hotel Model find", async () => {
      const mockModelFindAll = jest.fn(() =>
        Promise.resolve(hotelMocks.responseAllHotels)
      )

      jest.setMock("../models/hotelSchema", {
        find: mockModelFindAll
      })

      const hotelGetService = require("../api-services/hotelGetService")

      const foundList = await hotelGetService.findAll()

      expect(foundList).toMatchObject([
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

    it("Given the findAll service is called, if no hotels are found in the database, then an error is returned", async () => {
      expect.assertions(1)
      testHelperFunctions.mockModelFindRejectWith("GENERIC_ERROR")

      const hotelGetService = require("../api-services/hotelGetService")

      await expect(hotelGetService.findAll()).rejects.toThrowError(
        new Error("GENERIC_ERROR")
      )
    })
  })

  describe("Find one hotel service", () => {
    beforeEach(() => {
      jest.resetModules()
    })

    it("Given the user requests to find one hotel, then service is called and returns that hotel", async () => {
      const mockModelFindById = jest.fn(() =>
        Promise.resolve(hotelMocks.responseHotel)
      )

      jest.setMock("../models/hotelSchema", {
        findById: mockModelFindById
      })

      const hotelGetService = require("../api-services/hotelGetService")

      const foundHotel = await hotelGetService.findHotelById(
        "5da44ad81d0c1e0a5acb6a22"
      )

      expect(foundHotel).toMatchObject({
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
    })

    it("Given the user requests to find one hotel but no hotel is found, then service returns an error", async () => {
      const mockModelFindById = jest.fn(() => Promise.resolve())

      jest.setMock("../models/hotelSchema", {
        findById: mockModelFindById
      })

      const hotelGetService = require("../api-services/hotelGetService")

      const foundHotel = await hotelGetService.findHotelById(
        "5da44ad81d0c1e0a5acb6a22"
      )

      expect(foundHotel.message).toBe("NOT_FOUND")
    })

    it("Given the user requests a hotel with the ID in the wrong format, then service returns a MongoDB CastError", async () => {
      expect.assertions(1)

      testHelperFunctions.mockModelFindByIdRejectWith("CastError")

      const hotelGetService = require("../api-services/hotelGetService")

      try {
        await hotelGetService.findHotelById("anything")
      } catch (err) {
        expect(err.message).toBe("INVALID_ID")
      }
    })

    it("Given the user requests a hotel but a generic error occurs, then the service returns that error", async () => {
      expect.assertions(1)

      testHelperFunctions.mockModelFindByIdRejectWith("Generic error")

      const hotelGetService = require("../api-services/hotelGetService")

      try {
        await hotelGetService.findHotelById("anything")
      } catch (err) {
        expect(err.message).toBe("GENERIC_ERROR")
      }
    })
  })
})
