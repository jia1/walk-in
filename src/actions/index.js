export const makeInterviewAppointment = (interviewId, slotId, userId) => ({
  type: 'MAKE_INTERVIEW_APPOINTMENT',
  interviewId,
  slotId,
  userId
});
