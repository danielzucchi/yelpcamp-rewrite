export const actionTypes = {
  GET_CAMPGROUNDS: 'GET_CAMPGROUNDS',
  SET_CAMPGROUNDS: 'SET_CAMPGROUNDS',
};

export const getCampgrounds = () => ({
  type: actionTypes.GET_CAMPGROUNDS,
});

export const setCampgrounds = content => ({
  type: actionTypes.SET_CAMPGROUNDS,
  content,
});
