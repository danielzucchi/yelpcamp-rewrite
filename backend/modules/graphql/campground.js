const graphql = require('../graphql/index');

const getAllCampgrounds = async () => {
  const result = await graphql.query({
    query: `
    query Campgrounds {
        campground {
          id
          image
          name
          description
        }
      }
        `,
  });

  return result.data;
};

module.exports = getAllCampgrounds;
