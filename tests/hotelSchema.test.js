const Hotel = require("../models/hotelSchema")

describe("Hotel model", () => {
  it("Has the name property as a string", () => {
    const name_type = typeof Hotel.schema.paths.name.options.type()
    expect(name_type).toBe("string")
  })

  it("Name property is required", () => {
    const name_required = Hotel.schema.paths.name.options.required
    expect(name_required).toBe(true)
  })

  it("Has the price property as a string", () => {
    const price_type = typeof Hotel.schema.paths.price.options.type()
    expect(price_type).toBe("string")
  })

  it("Price property is required", () => {
    const price_required = Hotel.schema.paths.price.options.required
    expect(price_required).toBe(true)
  })

  it("Has the image property as a string", () => {
    const image_type = typeof Hotel.schema.paths.image.options.type()
    expect(image_type).toBe("string")
  })

  it("Image property is required", () => {
    const image_required = Hotel.schema.paths.image.options.required
    expect(image_required).toBe(true)
  })

  it("Has the description property as a string", () => {
    const description_type = typeof Hotel.schema.paths.description.options.type()
    expect(description_type).toBe("string")
  })

  it("Description property is required", () => {
    const description_required = Hotel.schema.paths.description.options.required
    expect(description_required).toBe(true)
  })

  it("Has the location property as a string", () => {
    const location_type = typeof Hotel.schema.paths.location.options.type()
    expect(location_type).toBe("string")
  })

  it("Location property is required", () => {
    const location_required = Hotel.schema.paths.location.options.required
    expect(location_required).toBe(true)
  })

  it("Has the latitude property as a number", () => {
    const latitude_type = typeof Hotel.schema.paths.latitude.options.type()
    expect(latitude_type).toBe("number")
  })

  it("Latitude property is required", () => {
    const latitude_required = Hotel.schema.paths.latitude.options.required
    expect(latitude_required).toBe(true)
  })

  it("Has the longitude property as a number", () => {
    const longitude_type = typeof Hotel.schema.paths.longitude.options.type()
    expect(longitude_type).toBe("number")
  })

  it("Longitude property is required", () => {
    const longitude_required = Hotel.schema.paths.longitude.options.required
    expect(longitude_required).toBe(true)
  })
})
