import { useState, useEffect } from "react";
import axios from "axios";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import TopBar from "./topBar"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const {courseId} = useParams();
  const location = useLocation();
  const courseNavSelected = location.pathname.split('/').pop().replace(/%20/g, ' ');

  // const course = courses.find((course) => course._id === courseId);

  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});

  const findCourseById = async (courseId) => {
    const response = await axios.get(
        `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
      <div className="flex-grow-1">
        <TopBar course={course} subpath={courseNavSelected}/>
        <hr/>
        <div className="container" id="course-home-main">
          <div className="row">
            <CourseNavigation/>
            <div className="col-1"></div>

            {/* Course Menu Routing */}
            <Routes>
              <Route path="/" element={<Navigate to="Home"/>}/>
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>}/>
              <Route path="Assignments" element={<Assignments/>}/>
              <Route
                  path="Assignments/:assignmentId"
                  element={<AssignmentEditor/>}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>

          </div>
        </div>


      </div>
  );
}

export default Courses;