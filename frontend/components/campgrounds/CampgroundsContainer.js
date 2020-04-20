import { connect } from 'react-redux';
import Campgrounds from './Campgrounds';

const mapStateToProps = ({ content }) => {
  const { campgrounds } = content;

  return {
    campgrounds,
  };
};

export default connect(mapStateToProps)(Campgrounds);
