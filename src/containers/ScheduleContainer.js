import { connect } from 'react-redux';

import Schedule from '../components/Schedule';

const mapStateToProps = state => {
  return {
    store: state
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule);

export default ScheduleContainer;
