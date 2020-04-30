import React from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/home-page/HomePage';

const Home = () => <HomePage />;

export default connect(state => state)(Home);
