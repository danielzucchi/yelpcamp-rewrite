import { connect } from 'react-redux';
import Campgrounds from './Campgrounds';

const mapStateToProps = ({ content }) => {
  const { campgrounds, isLoading } = content;

  return {
    campgrounds,
    isLoading,
  };
};

export default connect(mapStateToProps)(Campgrounds);
