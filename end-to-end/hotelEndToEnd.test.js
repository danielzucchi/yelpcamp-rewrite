const server = require("../index")
const request = require("supertest")
const hotelMocks = require("../tests/hotelTestMocks")
const hotelTestHelper = require("./hotelTestHelper")

// BEFORE RUNNING TESTS: initialize database daemon

describe("Create a hotel end-to-end tests", () => {
  let listOfHotelsToDelete = []

  afterAll(async done => {
    await hotelTestHelper.deleteHotelsByID(listOfHotelsToDelete)
  })

  it("Given the user creates a new hotel, then the hotel created is returned with a 201 status code.", async () => {
    return await request(server)
      .post("/hotels")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send(hotelMocks.testHotel)
      .then(response => {
        listOfHotelsToDelete.push(response.body._id)
        expect(response.statusCode).toBe(201)
        expect(response.body).toMatchObject(hotelMocks.testHotel)
        expect(response.body._id).toBeDefined()
      })
  })
})
