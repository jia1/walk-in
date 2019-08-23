import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import utils from '../utils';

import './ScheduleTable.scss';

const ScheduleTable = ({
  userId,
  interviews,
  slots,
  schedule,
  onCancelInterviewAppointmentClick
}) => {
  return (
    <div className="ScheduleTable">
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>When</TableCell>
              <TableCell>Where</TableCell>
              <TableCell>Interview</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              schedule.map((s, i) => {
                const interview = interviews[s.interviewId];
                const slot = slots[s.slotId];
                return (
                  <TableRow key={slot.id}>
                    <TableCell component="th" scope="row">
                      {utils.formatDateTime(slot.startDateTime)} ({utils.getDuration(slot.startDateTime, slot.endDateTime)})
                    </TableCell>
                    <TableCell>
                      Blame OneMap API
                    </TableCell>
                    <TableCell>
                      {interview.title}
                    </TableCell>
                    <TableCell>
                      <ButtonGroup
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        <Button
                          component={Link} to={{
                            pathname: `/schedule/${interview.id}`,
                            state: {
                              interviews,
                              slots
                            }
                          }}
                        >
                          View details
                        </Button>
                        <Button
                          onClick={() => {
                            onCancelInterviewAppointmentClick(interview.id, slot.id, userId);
                          }}
                        >
                          Cancel interview
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default ScheduleTable;
