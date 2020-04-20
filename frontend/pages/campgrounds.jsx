import React from 'react';
import { connect } from 'react-redux';
import { setPageContent } from '../lib/content/actions';
import CampgroundsContainer from '../components/campgrounds/CampgroundsContainer';
import axios from 'axios';

const Page = () => {
  return <CampgroundsContainer />;
};

Page.getInitialProps = async ({ store }) => {
  await axios
    .get('http://localhost:5000/campgrounds')
    .then(res => res.data.campground)
    .then(campgrounds => store.dispatch(setPageContent(campgrounds)))
    .catch(err => console.log(err));

  return {};
};

export default connect(state => state)(Page);
