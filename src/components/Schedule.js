import React from 'react';
import {
  Tab,
  Tabs
} from '@material-ui/core';
import {
  CalendarViewDay as CalendarViewDayIcon,
  TableChart as TableChartIcon
} from '@material-ui/icons';

import ScheduleTable from './ScheduleTable';
import ScheduleCalendar from './ScheduleCalendar';
import utils from '../utils';

import './Schedule.scss';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      activeTabId: 0
    };
  }

  _switchTab(activeTabId) {
    this.setState({
      activeTabId
    });
  }

  render() {
    return (
      <div className="Schedule">
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          onChange={(e, v) => {
            this._switchTab(v);
          }}
          value={this.state.activeTabId}
        >
          <Tab
            label="TABLE VIEW"
            icon={<TableChartIcon />}
            value={0}
          />
          <Tab
            label="CALENDAR VIEW"
            icon={<CalendarViewDayIcon />}
            value={1}
          />
        </Tabs>
        <div className={this.state.activeTabId == 0 ? '' : 'hidden'}>
          <ScheduleTable
            userId={this.state.userId}
            interviews={this.props.interviews}
            slots={this.props.slots}
            schedule={this.props.schedule}
            onCancelInterviewAppointmentClick={this.props.onCancelInterviewAppointmentClick}
          />
        </div>
        <div className={this.state.activeTabId == 1 ? '' : 'hidden'}>
          <ScheduleCalendar
            events={utils.scheduleToEvent(this.props.interviews, this.props.slots, this.props.schedule)}
          />
        </div>
      </div>
    );
  }
};

export default Schedule;
