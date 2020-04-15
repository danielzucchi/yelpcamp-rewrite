import Config from '../../config/config';
import axios from 'axios';

const graphql = {};

graphql.query = async (options) => {
  const { query } = options;

  const response = await axios.post(Config.graphql.URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    query: query,
  });

  const data = await response;

  return data;
};

module.exports = graphql;
