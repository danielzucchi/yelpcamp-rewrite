import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import initStore from './lib/store';
import Routes from './routes';

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
