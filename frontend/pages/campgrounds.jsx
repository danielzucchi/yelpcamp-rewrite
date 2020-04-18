import React, { Component } from 'react';
import { setPageContent } from '../lib/content/actions';
import CampgroundsContainer from '../components/campgrounds/CampgroundsContainer';
import axios from 'axios';
import store from '../lib/store';

function Campgrounds() {
  return <CampgroundsContainer />;
}

export async function getStaticProps() {
  await axios
    .get('http://localhost:5000/campgrounds')
    .then(res => res.data.campground)
    .then(campgrounds => store.dispatch(setPageContent(campgrounds)))
    .catch(err => console.log(err));

  return { props: {} };
}

export default Campgrounds;
