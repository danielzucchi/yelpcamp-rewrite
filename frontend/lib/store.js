import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const logger = createLogger({
  predicate: () => {
    return process.browser;
  },
});

const middleware = [];

const bindMiddlewares = middlewares => {
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);

    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
};

const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, bindMiddlewares(middleware));

export default initStore;
