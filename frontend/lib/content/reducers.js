import { actionTypes } from './actions';

export const initialState = {
  isLoading: true
};

const content = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.SET_PAGE_CONTENT:
      newState.isLoading = false;
      newState.campgrounds = action.content;

      return newState;

    default:
      return state;
  }
};

export default content;
