import moment from 'moment';

import toNorm from './norm';

const formatDateTime = (s) => {
  return moment(s).format('MMM Do, h.mm a');
};

const formatTime = (s) => {
  return moment(s).format('h.mm a');
};

const sortSchedule = (schedule, slots) => {
  let scheduleToSort = Object.values(schedule || []);
  scheduleToSort.sort((left, right) => {
    if (slots[left.slotId].startDateTime <= slots[right.slotId].startDateTime) {
      return -1;
    }
    return 1;
  });
  return scheduleToSort;
};

// Source: https://stackoverflow.com/questions/5454235
const truncate = (s, n) => {
  const t = s.substr(0, n);
  return t.substr(0, Math.min(t.length, t.lastIndexOf(' ')));
};

export default {
  formatDateTime,
  formatTime,
  sortSchedule,
  toNorm,
  truncate
};
