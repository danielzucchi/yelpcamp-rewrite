import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

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

export default function initStore() {
  const persistConfig = {
    key: 'nextjs',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer, {});

  store.persistor = persistStore(store);

  return store;
}
