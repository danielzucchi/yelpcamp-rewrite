const Validator = require("jsonschema").Validator
const v = new Validator()

const schema = {
  id: "/Hotel",
  type: "object",
  properties: {
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    deleted: { type: Boolean, default: false }
  }
}

const validateAgainstSchema = body => {
  const val = v.validate(body, schema)

  return val.errors.map(error => {
    let index = error.stack.indexOf(".")
    return error.stack.substring(index + 1)
  })
}

module.exports = validateAgainstSchema
