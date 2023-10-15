import db from "../../Kanbas/Database";
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

function Courses() {
  const {courseId} = useParams();
  const location = useLocation();
  const courseNavSelected = location.pathname.split('/').pop().replace(/%20/g, ' ');

  const course = db.courses.find((course) => course._id === courseId);
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
              <Route path="Assignments" element={<h2>Assignments</h2>}/>
              <Route
                  path="Assignments/:assignmentId"
                  element={<h2>Assignment Editor</h2>}
              />
              <Route path="Grades" element={<h2>Grades</h2>}/>
            </Routes>

          </div>
        </div>


      </div>
  );
}

export default Courses;