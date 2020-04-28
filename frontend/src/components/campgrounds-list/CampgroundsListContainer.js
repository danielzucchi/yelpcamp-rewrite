import { connect } from 'react-redux';
import CampgroundsList from './CampgroundsList';

const mapStateToProps = ({ content }) => {
  const { campgrounds, isLoading, error } = content;

  return {
    campgrounds,
    isLoading,
    error,
  };
};

export default connect(mapStateToProps)(CampgroundsList);
