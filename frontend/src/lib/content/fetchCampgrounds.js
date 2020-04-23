import axios from 'axios';
import { publicRuntimeConfig } from '../config';
import { getCampgrounds, setCampgrounds, getCampgroundsFail } from './actions';

const fetchCampgrounds = key => {
  return async dispatch => {
    dispatch(getCampgrounds(key));
    await axios
      .get(`${publicRuntimeConfig.REACT_APP_API_URL}/content/${key}`)
      .then(res => res.data.campground)
      .then(campgrounds => dispatch(setCampgrounds(campgrounds)))
      .catch(err => dispatch(getCampgroundsFail(err)));
  };
};

export default fetchCampgrounds;
