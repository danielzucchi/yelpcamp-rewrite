const mockModelFindRejectWith = (name, message) => {
  const error = new Error()
  error.name = name
  error.message = message

  jest.setMock("../models/hotelSchema", {
    find: jest.fn(() => Promise.reject(error))
  })
  // return require("../api-services/hotelGetService")
}

describe("Find all hotels service", () => {
  it("Given the findAll service is called, then Mongo find function is called with params", async () => {
    const mockModelFindAll = jest.fn(() => Promise.resolve())
    jest.setMock("../models/hotelSchema", {
      find: mockModelFindAll
    })

    const hotelGetService = require("../api-services/hotelGetService")

    await hotelGetService.findAllHotels()

    expect(mockModelFindAll).toHaveBeenCalledWith({ deleted: false })
  })

  // it("Given the findAll service is called, if no hotels are found in the database, then a 404 error is returned", async () => {
  //   expect.assertions(1)
  //   mockModelFindRejectWith("NOT_FOUND")

  //   const hotelGetService = require("../api-services/hotelGetService")

  //   try {
  //     await hotelGetService.findAllHotels()
  //   } catch (err) {
  //     expect(err.message).toBe("BOO")
  //   }
  // })
})
