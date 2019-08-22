import React from 'react';
import {
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
    console.log(normSubState);
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
                <TableCell>Name of interview</TableCell>
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
                      <TableCell>{interview.title}</TableCell>
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
