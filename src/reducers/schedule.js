// Cannot use !==
const schedule = (state = [], action) => {
  const interviewId = action.interviewId;
  const slotId = action.slotId;
  switch (action.type) {
    case 'MAKE_INTERVIEW_APPOINTMENT':
      if (state.find((s) => s.slotId == slotId)) {
        return state;
      }
      return state.concat([{
        id: slotId, // HACK
        interviewId,
        slotId
      }]);
    case 'CANCEL_INTERVIEW_APPOINTMENT':
      return state.filter((s, i) => s.slotId != slotId);
    default:
      return state;
  }
};

export default schedule;
