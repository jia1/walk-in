/*
  Helpful links:
  https://github.com/intljusticemission/react-big-calendar/issues/1363
  https://github.com/intljusticemission/react-big-calendar/issues/550
*/
import React from 'react';
import {
  Calendar,
  momentLocalizer
} from 'react-big-calendar';
import moment from 'moment';
import {
  Box,
  Paper
} from '@material-ui/core';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ScheduleCalendar.scss';

const localizer = momentLocalizer(moment);

const ScheduleCalendar = ({ events }) => {
  return (
    <div className="ScheduleCalendar">
      <Paper>
        <Box p={4}>
          <Calendar
            localizer={localizer}
            events={events}
            views={[
              'work_week',
              'day'
            ]}
            defaultView="work_week"
            min={new Date(1566518400865)} // 8 am
            max={new Date(1566558000865)} // 7 pm
          />
        </Box>
      </Paper>
    </div>
  );
};

export default ScheduleCalendar;
