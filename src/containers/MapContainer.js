import { connect } from 'react-redux';

import { bookInterview } from '../actions';
import MapWrapper from '../components/MapWrapper';

const mapStateToProps = state => {
  return {
    interviews: state.interviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onBookInterviewClick: (interviewId, userId) => {
      dispatch(bookInterview(interviewId, userId));
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapWrapper);

export default MapContainer;
