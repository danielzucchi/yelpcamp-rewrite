const mockModelFindRejectWith = message => {
  const error = new Error()
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

    await hotelGetService.findAll()

    expect(mockModelFindAll).toHaveBeenCalledWith({ deleted: false })
  })

  it("Given the findAll service is called, if no hotels are found in the database, then a 404 error is returned", async () => {
    expect.assertions(1)
    mockModelFindRejectWith("NOT_FOUND")

    const hotelGetService = require("../api-services/hotelGetService")

    await expect(hotelGetService.findAll()).rejects.toThrowError(
      new Error("GENERIC_ERROR")
    )
  })
})