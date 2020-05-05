import { connect } from 'react-redux';
import CampgroundsPage from './CampgroundsPage';

const mapStateToProps = ({ content }) => {
  const { isLoading, globalCopy } = content;

  return {
    campgroundsTitle: globalCopy['campgrounds.campgrounds'],
    isLoading,
  };
};

export default connect(mapStateToProps)(CampgroundsPage);
