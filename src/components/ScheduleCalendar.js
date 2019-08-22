// Helpful link: https://github.com/intljusticemission/react-big-calendar/issues/1363
import React from 'react';
import {
  Calendar,
  Views,
  momentLocalizer
} from 'react-big-calendar';
import moment from 'moment';
import {
  Box,
  Paper
} from '@material-ui/core';
import { spacing } from '@material-ui/system';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const views = Object.values(Views);

const ScheduleCalendar = ({ events }) => {
  return (
    <div className="ScheduleCalendar">
      <Paper>
        <Box p={3}>
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
