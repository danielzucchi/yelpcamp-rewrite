import { combineReducers } from 'redux';
import contentReducer from './content/reducers';

const rootReducer = combineReducers({ content: contentReducer });

export default rootReducer;
