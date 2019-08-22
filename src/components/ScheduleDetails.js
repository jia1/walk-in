// Helpful link: https://tylermcginnis.com/react-router-pass-props-to-link/
import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from '@material-ui/core';

import utils from '../utils';

const ScheduleDetails = ({
  match,
  location
}) => {
  const interviewId = match.params.id;
  const { interviews, slots } = location.state;
  const interview = interviews[interviewId];
  const slotsToSort = Object.values(slots).filter((slot) => interview.slots.includes(slot.id));
  slotsToSort.sort((left, right) => {
    if (left.startDateTime <= right.startDateTime) {
      return -1;
    }
    return 1;
  });
  return (
    <div className="ScheduleDetails">
      <Paper>
        <Box p={4}>
          <h4>{interview.title}</h4>
          <p>
            {interview.description}
          </p>
          <List
          subheader={
            <ListSubheader component="div">
              Schedule
            </ListSubheader>
          }>
            {
              slotsToSort.map((slot, i) => {
                return (
                  <ListItem key={i}>
                    <ListItemText
                      primary={utils.formatDateTime(slot.startDateTime)}
                      secondary={utils.getDuration(slot.startDateTime, slot.endDateTime)}
                    />
                  </ListItem>
                );
              })
            }
          </List>
        </Box>
      </Paper>
    </div>
  );
};

export default ScheduleDetails;
