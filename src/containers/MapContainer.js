import { connect } from 'react-redux';

import {
  makeInterviewAppointment
} from '../actions';
import MapWrapper from '../components/MapWrapper';

const mapStateToProps = state => {
  return {
    interviews: state.interviews
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onMakeInterviewAppointmentClick: (interviewId, slotId, userId) => {
      dispatch(makeInterviewAppointment(interviewId, slotId, userId));
    }
  };
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapWrapper);

export default MapContainer;
