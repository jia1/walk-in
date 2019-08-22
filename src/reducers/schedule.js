const schedule = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_INTERVIEW_APPOINTMENT':
      const interviewId = action.interviewId;
      const slotId = action.slotId;
      let schedule = state;
      if (schedule.find((s) => s.slotId === slotId)) {
        return schedule;
      }
      schedule.push({
        interviewId,
        slotId
      });
      return schedule;
      /*
      const normState = utils.toNorm(state);
      return {
        ...state,
        ...normState.entities
      };
      */
    default:
      return state;
  }
};

export default schedule;
