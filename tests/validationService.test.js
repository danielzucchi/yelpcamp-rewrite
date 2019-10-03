const validator = require("../services/validationService")
const mocks = require("./hotelTestMocks")

describe("Validator test", () => {
  it("When correct model is passed, validator returns empty array", () => {
    const validate = validator(mocks.testHotel)

    expect(validate).toEqual([])
  })

  it("When incorrect model is passed, validator returns error", () => {
    const validate = validator(mocks.testHotelMissingName)

    expect(validate).toEqual(["name is required"])
  })
})
