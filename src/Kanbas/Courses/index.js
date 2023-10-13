import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import TopBar from "./topBar"

function Courses() {
  const {courseId} = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  console.log(courseId)
  return (
      <div className="flex-grow-1">
        <TopBar course={course} />
        <hr/>
        <CourseNavigation />


      </div>
  );
}

export default Courses;