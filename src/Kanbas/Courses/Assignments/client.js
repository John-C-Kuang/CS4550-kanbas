import axios from "axios";

const ASSIGNMENT_URL = "http://localhost:4000/api/assignments";
const COURSE_URL = "http://localhost:4000/api/courses";

export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
      `${COURSE_URL}/${courseId}/assignments`,
      assignment
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
  .get(`${COURSE_URL}/${courseId}/assignments`);
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios
  .delete(`${ASSIGNMENT_URL}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment) => {
  const response = await axios.put(`${ASSIGNMENT_URL}/${assignment._id}`, assignment);
  return response.data;
};
