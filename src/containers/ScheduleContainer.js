import { connect } from 'react-redux';

import {
  cancelInterviewAppointment
} from '../actions';
import Schedule from '../components/Schedule';

const mapStateToProps = state => {
  return {
    store: state,
    schedule: state.schedule
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
