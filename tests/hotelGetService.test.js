describe("Find all hotels service", () => {
  it("Given the findAll service is called, then Mongo find function is called", async () => {
    const mockModelFindAll = jest.fn(() => Promise.resolve())
    jest.setMock("../models/hotelSchema", {
      find: mockModelFindAll
    })

    const hotelGetService = require("../api-services/hotelGetService")

    await hotelGetService.findAllHotels()

    expect(mockModelFindAll).toHaveBeenCalledWith({ deleted: false })
  })
})
