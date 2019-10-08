const mocks = {
  testCampground: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  responseCampground: {
    _id: "nfjdkshgkjre",
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false,
    __v: 0
  },

  testCampgroundMissingName: {
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testCampgroundMissingPrice: {
    name: "Test Campsite",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testCampgroundMissingDescription: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testCampgroundMissingImage: {
    name: "Test Campsite",
    price: "£40",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testCampgroundMissingLocation: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testCampgroundMissingLatitude: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    longitude: 4321,
    deleted: false
  },

  testCampgroundMissingLongitude: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    deleted: false
  }
}

module.exports = mocks
