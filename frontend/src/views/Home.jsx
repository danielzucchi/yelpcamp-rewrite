import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePageContainer from '../components/home-page/HomePageContainer';
import Loading from '../components/ui/loading-spinner/Loading';

const Home = ({ content }) => {
  const { isLoading } = content;

  return isLoading ? <Loading /> : <HomePageContainer />;
};

Home.propTypes = {
  content: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(state => state)(Home);
