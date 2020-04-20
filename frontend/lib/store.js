import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// const bindMiddlewares = middleware => {
//   if (process.env.NODE_ENV !== 'production') {
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

const logger = createLogger({
  predicate: () => {
    return process.browser;
  },
});

const makeConfiguredStore = (reducer, initialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger)),
  );

export default function initStore(initialState) {
  const persistConfig = {
    key: 'nextjs',
    storage,
    timeout: 1,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer, initialState);

  store.persistor = persistStore(store);

  return store;
}
