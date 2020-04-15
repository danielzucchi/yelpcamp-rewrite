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

  console.log(result);
  return result.data;
};

module.exports = getAllCampgrounds;
