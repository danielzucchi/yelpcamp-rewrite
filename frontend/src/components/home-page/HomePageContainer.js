import { connect } from 'react-redux';
import HomePage from './HomePage';

const mapStateToProps = ({ content }) => {
  const { globalCopy, isLoading } = content;

  return {
    homeTitle: globalCopy['homepage.home'],
    isLoading,
  };
};

export default connect(mapStateToProps)(HomePage);
