import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {name: "New Assignment 123", description: "New Description"},
};

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    deleteAssignments: (state, action) => {
      state.assignments = state.assignments.filter(
          (assignments) => assignments._id !== action.payload
      );
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addOrEditAssignments: (state, action) => {
      if (action.payload._id === null) {
        console.log("ADD")
        state.assignments = [
          {...action.payload, _id: new Date().getTime().toString()},
          ...state.assignments,
        ];
      } else {
        console.log("UPDATE")
        state.assignments = state.assignments.map((assignments) => {
          if (assignments._id === action.payload._id) {
            return action.payload;
          } else {
            return assignments;
          }
        });
      }
    },
  },
});

export const {
  addOrEditAssignments,
  deleteAssignments,
  setAssignments
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
