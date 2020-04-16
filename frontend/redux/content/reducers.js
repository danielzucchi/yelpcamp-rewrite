import { actionTypes } from './actions';

export const inisitalState = {
  isLoading: true
};

const reducer = (state = inisitalState, action) => {
  switch (action.type) {
    case actionTypes.GET_PAGE_CONTENT:
      return { isLoading: true };

    case actionTypes.SET_PAGE_CONTENT:
      return { isLoading: false, ...action.content };

    default:
      return state;
  }
};

export default reducer;
