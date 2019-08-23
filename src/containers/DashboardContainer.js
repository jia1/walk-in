import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

import utils from '../utils';

const mapStateToProps = state => {
  return utils.toNorm(state).entities;
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;
