export const actionTypes = {
  GET_CAMPGROUNDS: 'GET_CAMPGROUNDS',
  SET_CAMPGROUNDS: 'SET_CAMPGROUNDS',
  GET_CAMPGROUNDS_FAIL: 'GET_CAMPGROUNDS_FAIL',
  GET_CONTENT: 'GET_CONTENT',
  SET_CONTENT: 'SET_CONTENT',
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

export const getContent = () => ({
  type: actionTypes.GET_CONTENT,
});

export const setContent = content => ({
  type: actionTypes.SET_CONTENT,
  content,
});
