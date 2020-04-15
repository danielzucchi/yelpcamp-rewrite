import Config from '../../config/config';
import axios from 'axios';

const graphql = {};

graphql.query = async (options) => {
  const { query } = options;

  const response = await axios(Config.graphql.URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const data = await response;

  return data;
};

module.exports = graphql;
