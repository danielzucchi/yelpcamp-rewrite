import React from 'react';
import { Provider } from 'react-redux';
import { setPageContent } from '../lib/content/actions';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import store from '../lib/store';

const makeStore = () => store;

export default withRedux(makeStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      };
    }

    render() {
      const { Component, pageProps, makeStore } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);
