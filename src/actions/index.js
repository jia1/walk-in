export const makeInterviewAppointment = (interviewId, userId) => ({
  type: 'MAKE_INTERVIEW_APPOINTMENT',
  interviewId,
  userId
});
