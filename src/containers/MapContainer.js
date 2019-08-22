import { connect } from 'react-redux';

import {
  makeInterviewAppointment
} from '../actions';
import MapWrapper from '../components/MapWrapper';

const mapStateToProps = state => {
  return {
    interviews: state.interviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMakeInterviewAppointmentClick: (interviewId, userId) => {
      dispatch(makeInterviewAppointment(interviewId, userId));
    }
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapWrapper);

export default MapContainer;
