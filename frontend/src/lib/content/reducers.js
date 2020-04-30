import { actionTypes } from './actions';

export const initialState = {
  isLoading: true,
};

const contentReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.GET_CAMPGROUNDS:
      newState.isLoading = true;

      return newState;

    case actionTypes.SET_CAMPGROUNDS:
      newState.isLoading = false;
      newState.campgrounds = action.content;

      return newState;

    case actionTypes.GET_CAMPGROUNDS_FAIL:
      newState.isLoading = false;
      newState.campgrounds = null;
      newState.error = action.error.message;

      return newState;

    case actionTypes.GET_CONTENT:
      newState.isLoading = true;

      return newState;

    case actionTypes.SET_CONTENT:
      newState.isLoading = false;
      newState.globalCopy = action.content;

      return newState;

    default:
      return state;
  }
};

export default contentReducer;
