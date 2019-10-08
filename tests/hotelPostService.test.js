const mocks = require("./hotelTestMocks")
const testHelperFunctions = require("./testHelperFunctions")

describe("Creates a hotel with parameters", () => {
  it("Goven the user adds a hotel, Hotel model is called with passed hotel details", async () => {
    const mockModelCreate = jest.fn(() => Promise.resolve(mocks.testHotel))
    jest.setMock("../models/hotelSchema", {
      create: mockModelCreate
    })

    const hotelPostService = require("../api-services/hotelPostService")

    await hotelPostService.createHotel(mocks.testHotel)

    expect(mockModelCreate).toHaveBeenCalledWith(mocks.testHotel)
  })
})

describe("Error handling cases", () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it("Given rquest is made with a missing or invalid field, then service returns a Validation Error message", async () => {
    testHelperFunctions.mockModelCreateRejectWith(
      "ValidationError",
      "Required field not fulfilled"
    )

    const hotelPostService = require("../api-services/hotelPostService")

    try {
      await hotelPostService.createHotel()
    } catch (err) {
      expect(err.message).toBe("Required field not fulfilled")
    }
  })

  it("Given rquest fails for any other reason, then service returns a Generic Error message", async () => {
    expect.assertions(1)
    testHelperFunctions.mockModelCreateRejectWith("Generic Error")

    const hotelPostService = require("../api-services/hotelPostService")

    try {
      await hotelPostService.createHotel()
    } catch (err) {
      expect(err.message).toBe("Generic Error")
    }
  })
})
