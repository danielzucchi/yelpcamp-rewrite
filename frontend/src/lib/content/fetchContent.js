import axios from 'axios';
import { publicRuntimeConfig } from '../config';
import {
  getCampgrounds,
  setCampgrounds,
  getCampgroundsFail,
  getContent,
  setContent,
} from './actions';

const fetchContent = {};

fetchContent.fetchCampgrounds = key => {
  return async dispatch => {
    dispatch(getCampgrounds(key));

    await axios
      .get(`${publicRuntimeConfig.REACT_APP_API_URL}/content/${key}`)
      .then(res => res.data.campground)
      .then(campgrounds => dispatch(setCampgrounds(campgrounds)))
      .catch(err => dispatch(getCampgroundsFail(err)));
  };
};

fetchContent.fetchGlobalCopy = () => {
  return async dispatch => {
    dispatch(getContent());

    await axios
      .get(
        `${publicRuntimeConfig.REACT_APP_CONTENTFUL_API}/${publicRuntimeConfig.REACT_APP_CONTENTFUL_SPACES}/entries?content_type=microCopy&access_token=${publicRuntimeConfig.REACT_APP_CONTENTFUL_TOKEN}`,
      )
      .then(res => {
        const entries = {};

        res.data.items.forEach(item => {
          entries[item.fields.key] = item.fields.value;
        });

        dispatch(setContent(entries));
      });
  };
};

export default fetchContent;
