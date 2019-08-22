export const makeInterviewAppointment = (interviewId, slotId, userId) => ({
  type: 'MAKE_INTERVIEW_APPOINTMENT',
  interviewId,
  slotId,
  userId
});

export const cancelInterviewAppointment = (interviewId, slotId, userId) => ({
  type: 'CANCEL_INTERVIEW_APPOINTMENT',
  interviewId,
  slotId,
  userId
});
