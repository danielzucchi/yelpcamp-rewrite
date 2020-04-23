import { connect } from 'react-redux';
import Campgrounds from './Campgrounds';

const mapStateToProps = ({ content }) => {
  const { campgrounds, isLoading, error } = content;

  return {
    campgrounds,
    isLoading,
    error,
  };
};

export default connect(mapStateToProps)(Campgrounds);
