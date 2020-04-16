import Config from '../../config/config';
import axios from 'axios';

const graphql = {};

graphql.query = async options => {
  const { query } = options;

  return await axios
    .post(Config.graphql.URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      query: query,
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = graphql;
