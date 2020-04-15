import Config from '../../config/config';
import axios from 'axios';

const graphql = {};

graphql.query = async (options) => {
  const { query } = options;

  const response = await axios({
    method: 'POST',
    url: Config.graphql.URL,
    body: JSON.stringify({
      query,
    }),
  });

  const data = await response;

  return data;
};

module.exports = graphql;
