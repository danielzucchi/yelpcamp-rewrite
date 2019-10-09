const server = require("../index")
const request = require("supertest")
const hotelMocks = require("../tests/hotelTestMocks")
const hotelTestHelper = require("./hotelTestHelper")

// BEFORE RUNNING TESTS: initialize database daemon

describe("Create a hotel end-to-end tests", () => {
  let searchTestHotelID
  let listOfHotelsToDelete = []

  beforeAll(async () => {
    searchTestHotelID = await hotelTestHelper.insertTestHotelInDB(
      hotelMocks.testHotel
    )
    listOfHotelsToDelete.push(searchTestHotelID)
  })

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

  it("Given the user searches for all hotels in database, then those are returned.", async () => {
    return await request(server)
      .get("/hotels")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toEqual(listOfHotelsToDelete.length)
      })
  })
})
