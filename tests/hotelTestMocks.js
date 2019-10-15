const mocks = {
  testHotel: {
    name: "Test Hotel",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  responseHotel: {
    _id: "5da44ad81d0c1e0a5acb6a22",
    name: "Test Hotel",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false,
    __v: 0
  },

  testHotelMissingName: {
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testHotelMissingPrice: {
    name: "Test Campsite",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testHotelMissingDescription: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testHotelMissingImage: {
    name: "Test Campsite",
    price: "£40",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testHotelMissingLocation: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    latitude: 1234,
    longitude: 4321,
    deleted: false
  },

  testHotelMissingLatitude: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    longitude: 4321,
    deleted: false
  },

  testHotelMissingLongitude: {
    name: "Test Campsite",
    price: "£40",
    image: "http://sample.jpg",
    description: "Lorem ipsum",
    location: "Lake District",
    latitude: 1234,
    deleted: false
  },

  responseAllHotels: [
    {
      name: "Test Hotel",
      price: "£40",
      image: "http://sample.jpg",
      description: "Lorem ipsum",
      location: "Lake District",
      latitude: 1234,
      longitude: 4321,
      deleted: false
    },
    {
      name: "Test Hotel2",
      price: "£42",
      image: "http://sample.jpg",
      description: "Lorem ipsum",
      location: "Lake District",
      latitude: 1234,
      longitude: 4321,
      deleted: false
    }
  ]
}

module.exports = mocks
