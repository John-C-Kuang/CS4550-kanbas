import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {_id: null, course: "New Course ID", title: "New Title"},
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    deleteAssignments: (state, action) => {
      state.assignments = state.assignments.filter(
          (assignments) => assignments._id !== action.payload
      );
    },

    setAssignment: (state, action) => {
      console.log(action.payload);
      state.assignment = action.payload;
      console.log(state.assignment)
    },

    addOrEditAssignments: (state, action) => {
      if (action.payload._id === null) {
        console.log("ADD")
        state.assignments = [
          {...action.payload, _id: new Date().getTime().toString()},
          ...state.assignments,
        ];
        console.log(state.assignments)
      } else {
        console.log("UPDATE")
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
  deleteAssignments,
  setAssignment
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
