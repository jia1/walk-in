import moment from 'moment';

import toNorm from './norm';

const capitalizeOnce = (w) => {
  if (w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  return w;
};

const formatDateTime = (s) => {
  return moment(s).format('MMM Do, h.mm a');
};

const formatTime = (s) => {
  return moment(s).format('h.mm a');
};

const getDuration = (start, end) => {
  return capitalizeOnce(moment.duration(end - start).humanize().replace('an', '1'));
};

const scheduleToEvent = (interviews, slots, schedule) => {
  return (schedule || []).map((schedule) => {
    return {
      title: interviews[schedule.interviewId].title,
      start: new Date(slots[schedule.slotId].startDateTime),
      end: new Date(slots[schedule.slotId].endDateTime),
      allDay: false,
      resource: {
        location: [
          interviews[schedule.interviewId].latitude,
          interviews[schedule.interviewId].longitude
        ]
      }
    };
  });
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
  getDuration,
  scheduleToEvent,
  sortSchedule,
  toNorm,
  truncate
};
