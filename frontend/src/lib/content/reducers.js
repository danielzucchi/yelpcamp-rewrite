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

    default:
      return state;
  }
};

export default contentReducer;
