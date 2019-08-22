import { connect } from 'react-redux';

import {
  makeInterviewAppointment
} from '../actions';
import MapWrapper from '../components/MapWrapper';

import utils from '../utils';

const mapStateToProps = state => {
  return utils.toNorm(state).entities;
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
