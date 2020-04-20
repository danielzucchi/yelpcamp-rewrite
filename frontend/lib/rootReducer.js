import { combineReducers } from 'redux';
import content from './content/reducers';

const rootReducer = combineReducers({ content });

export default rootReducer;
