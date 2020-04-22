import axios from 'axios';
import { getCampgrounds, setCampgrounds } from './actions';

const fetchCampgrounds = () => {
  return async dispatch => {
    dispatch(getCampgrounds());
    await axios
      .get('http://localhost:5000/campgrounds')
      .then(res => res.data.campground)
      .then(campgrounds => dispatch(setCampgrounds(campgrounds)))
      .catch(err => err);
  };
};

export default fetchCampgrounds;
