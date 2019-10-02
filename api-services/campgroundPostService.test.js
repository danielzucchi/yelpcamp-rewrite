const mocks = require("../tests/campgroundTestMocks")

const mockModelCreate = jest.fn(() => Promise.resolve(mocks.testCampground))
jest.setMock("../models/campgroundSchema", {
  create: mockModelCreate
})

const mockModelCreateRejectWith = (name, message) => {
  const error = new Error()
  error.name = name
  error.message = message

  jest.setMock("../models/campgroundSchema", {
    create: jest.fn(() => Promise.reject(error))
  })
}

describe("Creates a campground with parameters", () => {
  it("Campground.model is called with passed campground details", async () => {
    const campgroundService = require("./campgroundPostService")

    await campgroundService.createCampground(mocks.testCampground)

    expect(mockModelCreate).toHaveBeenCalledWith(mocks.testCampground)
  })
})

describe("Error handling cases", () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it("Given rquest is made with a missing or invalid field, then service returns a Validation Error message", async () => {
    mockModelCreateRejectWith("ValidationError", "Required field not fulfilled")

    const campgroundService = require("./campgroundPostService")

    try {
      await campgroundService.createCampground()
    } catch (err) {
      expect(err.message).toBe("Required field not fulfilled")
    }
  })

  it("Given rquest fails for any other reason, then service returns a Generic Error message", async () => {
    expect.assertions(1)
    mockModelCreateRejectWith("Generic Error")

    const campgroundService = require("./campgroundPostService")

    try {
      await campgroundService.createCampground()
    } catch (err) {
      expect(err.message).toBe("Generic Error")
    }
  })
})
