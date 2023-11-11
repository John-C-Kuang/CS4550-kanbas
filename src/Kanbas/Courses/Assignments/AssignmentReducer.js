import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: {
    _id: null,
    course: "New Course ID",
    title: "New Title",
    description: "",
    dueDate: "2000-01-01",
    availableFromDate: "2000-01-01",
    availableUntilDate: "2000-01-01",
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
      );
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },

    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignments: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    editAssignments: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
  },
});

export const {
  addAssignments,
  editAssignments,
  deleteAssignment,
  setAssignment,
  setAssignments
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
