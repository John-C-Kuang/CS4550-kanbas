import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
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

    addOrEditAssignments: (state, action) => {
      if (action.payload._id === null) {
        state.assignments = [
          {...action.payload, _id: new Date().getTime().toString()},
          ...state.assignments,
        ];
        console.log(state.assignments)
      } else {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      }
    },
  },
});

export const {
  addOrEditAssignments,
  deleteAssignment,
  setAssignment
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
