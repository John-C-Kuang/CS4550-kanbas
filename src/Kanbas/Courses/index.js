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

function Courses() {
  const {courseId} = useParams();
  const location = useLocation();
  const courseNavSelected = location.pathname.split('/').pop();

  const course = db.courses.find((course) => course._id === courseId);
  return (
      <div className="flex-grow-1">
        <TopBar course={course} subpath={courseNavSelected}/>
        <hr/>
        <div className="container" id="course-home-main">
          <div className="row">
            <CourseNavigation/>
            <div className="col-7">

            {/* Course Menu Routing */}
              <Routes>
                <Route path="/" element={<Navigate to="Home"/>}/>
                <Route path="Home" element={<h1>Home</h1>}/>
                <Route path="Modules" element={<h1>Modules</h1>}/>
                <Route path="Assignments" element={<h1>Assignments</h1>}/>
                <Route
                    path="Assignments/:assignmentId"
                    element={<h1>Assignment Editor</h1>}
                />
                <Route path="Grades" element={<h1>Grades</h1>}/>
              </Routes>


            </div>
          </div>
        </div>


      </div>
  );
}

export default Courses;