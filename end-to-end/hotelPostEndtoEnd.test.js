const server = require("../index")
const request = require("supertest")
const mongoose = require("mongoose")
const hotelMocks = require("../tests/hotelTestMocks")

// BEFORE RUNNING TESTS: initialize database daemon

describe("Create a hotel end-to-end tests", () => {
  it("Given the user creates a new hotel, then the hotel created is returned with a 201 status code.", async done => {
    return await request(server)
      .post("/hotels")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send(hotelMocks.testHotel)
      .then(response => {
        expect(response.statusCode).toBe(201)
        expect(response.body).toMatchObject(hotelMocks.testHotel)
        expect(response.body._id).toBeDefined()
        done()
      })
  })
})
