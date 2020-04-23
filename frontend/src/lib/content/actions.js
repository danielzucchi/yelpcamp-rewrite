export const actionTypes = {
  GET_CAMPGROUNDS: 'GET_CAMPGROUNDS',
  SET_CAMPGROUNDS: 'SET_CAMPGROUNDS',
  GET_CAMPGROUNDS_FAIL: 'GET_CAMPGROUNDS_FAIL',
};

export const getCampgrounds = key => ({
  type: actionTypes.GET_CAMPGROUNDS,
  key,
});

export const setCampgrounds = content => ({
  type: actionTypes.SET_CAMPGROUNDS,
  content,
});

export const getCampgroundsFail = error => ({
  type: actionTypes.GET_CAMPGROUNDS_FAIL,
  error,
});
