import React from 'react';
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

import './Schedule.scss';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    const normSubState = utils.toNorm(this.props.store).entities;
    this.state = {
      interviews: normSubState.interviews,
      slots: normSubState.slots,
      schedule: utils.sortSchedule(this.props.store.schedule, normSubState.slots)
    };
  }

  render() {
    return (
      <div className="Schedule">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>When</TableCell>
                <TableCell>Interview</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.state.schedule.map((s, i) => {
                  const interview = this.state.interviews[s.interviewId];
                  const slot = this.state.slots[s.slotId];
                  return (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {utils.formatDateTime(slot.startDateTime)}
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
                            onClick={() => {
                            }}
                          >
                            View details
                          </Button>
                          <Button
                            onClick={() => {
                              this.props.onCancelInterviewAppointmentClick(interview.id, slot.id, this.state.userId);
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
  }
};

export default Schedule;
