import moment from 'moment';

// Source: https://stackoverflow.com/questions/5454235
const truncate = (s, n) => {
  const t = s.substr(0, n);
  return t.substr(0, Math.min(t.length, t.lastIndexOf(' ')));
}

const formatDateTime = (s) => {
  return moment(s).format('MMM Do, h.mm a');
};

const formatTime = (s) => {
  return moment(s).format('h.mm a');
};

export default {
  truncate,
  formatDateTime,
  formatTime
};
