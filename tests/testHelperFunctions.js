exports.mockModelFindRejectWith = (code, message) => {
  const error = new Error()
  error.message = message

  jest.setMock("../models/hotelSchema", {
    find: jest.fn(() => Promise.reject(error))
  })
  return require("../api-services/hotelGetService")
}

exports.mockModelCreateRejectWith = (name, message) => {
  const error = new Error()
  error.name = name
  error.message = message

  jest.setMock("../models/hotelSchema", {
    create: jest.fn(() => Promise.reject(error))
  })
}
