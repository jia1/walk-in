import { normalize, schema } from 'normalizr';

const interviewee = new schema.Entity('interviewee');
const slot = new schema.Entity('slots', {
  interviewees: [interviewee]
});
const interview = new schema.Entity('interviews', {
  slots: [slot]
});
const schedule = new schema.Entity('schedule');
const root = new schema.Object({
  interviews: [interview],
  schedule: [schedule]
});

const toNorm = (store) => normalize(store, root);

export default toNorm;
