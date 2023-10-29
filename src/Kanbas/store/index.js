import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/AssignmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentReducer,
  }
});

export default store;
