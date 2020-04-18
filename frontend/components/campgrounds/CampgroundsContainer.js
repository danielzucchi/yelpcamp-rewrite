import Campgrounds from './Campgrounds';
import { connect } from 'react-redux';

const mapStateToProps = ({ content }) => {
  const { campgrounds } = content;

  return {
    campgrounds
  };
};

export default connect(mapStateToProps)(Campgrounds);
