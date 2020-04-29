import { connect } from 'react-redux';
import CampgroundsPage from './CampgroundsPage';

const mapStateToProps = ({ content }) => {
  const { isLoading } = content;

  return {
    isLoading,
  };
};

export default connect(mapStateToProps)(CampgroundsPage);
