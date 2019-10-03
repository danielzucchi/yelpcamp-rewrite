const mocks = require("../tests/hotelTestMocks")

const mockModelCreate = jest.fn(() => Promise.resolve(mocks.testHotel))
jest.setMock("../models/hotelSchema", {
  create: mockModelCreate
})

const mockModelCreateRejectWith = (name, message) => {
  const error = new Error()
  error.name = name
  error.message = message

  jest.setMock("../models/hotelSchema", {
    create: jest.fn(() => Promise.reject(error))
  })
}

describe("Creates a hotel with parameters", () => {
  it("Hotel.model is called with passed hotel details", async () => {
    const hotelService = require("./hotelPostService")

    await hotelService.createHotel(mocks.testHotel)

    expect(mockModelCreate).toHaveBeenCalledWith(mocks.testHotel)
  })
})

describe("Error handling cases", () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it("Given rquest is made with a missing or invalid field, then service returns a Validation Error message", async () => {
    mockModelCreateRejectWith("ValidationError", "Required field not fulfilled")

    const hotelService = require("./hotelPostService")

    try {
      await hotelService.createHotel()
    } catch (err) {
      expect(err.message).toBe("Required field not fulfilled")
    }
  })

  it("Given rquest fails for any other reason, then service returns a Generic Error message", async () => {
    expect.assertions(1)
    mockModelCreateRejectWith("Generic Error")

    const hotelService = require("./hotelPostService")

    try {
      await hotelService.createHotel()
    } catch (err) {
      expect(err.message).toBe("Generic Error")
    }
  })
})
