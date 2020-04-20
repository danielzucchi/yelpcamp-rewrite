export const actionTypes = {
  GET_PAGE_CONTENT: 'GET_PAGE_CONTENT',
  SET_PAGE_CONTENT: 'SET_PAGE_CONTENT'
};

export const setPageContent = content => ({
  type: actionTypes.SET_PAGE_CONTENT,
  content
});