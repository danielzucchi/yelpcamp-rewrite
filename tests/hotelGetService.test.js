const testHelperFunctions = require("./testHelperFunctions")

describe("Find all hotels service", () => {
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

  it("Given the findAll service is called, if no hotels are found in the database, then an error is returned", async () => {
    expect.assertions(1)
    testHelperFunctions.mockModelFindRejectWith(
      "GENERIC_ERROR",
      "Something went wrong"
    )

    const hotelGetService = require("../api-services/hotelGetService")

    await expect(hotelGetService.findAll()).rejects.toThrowError(
      new Error("GENERIC_ERROR")
    )
  })
})
