import { connect } from 'react-redux';

import {
  cancelInterviewAppointment
} from '../actions';
import Schedule from '../components/Schedule';

import utils from '../utils';

const mapStateToProps = state => {
  const normState = utils.toNorm(state).entities;
  return {
    ...normState,
    schedule: utils.sortSchedule(
      normState.schedule || [], // normalizr ignores empty entities -> null
      normState.slots
    )
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onCancelInterviewAppointmentClick: (interviewId, slotId, userId) => {
      dispatch(cancelInterviewAppointment(interviewId, slotId, userId));
    }
  };
}

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);

export default ScheduleContainer;
