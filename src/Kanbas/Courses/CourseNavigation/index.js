import { Link, useParams, useLocation } from "react-router-dom";


function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Grades",
    "Quizzes",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB navigate)",
    "Settings",
  ];


  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
      <div className="nav flex-column sub-navigation mt-4" style={{ width: 150 }}>
        <ul className="list-group-item sub-nav-entry list-unstyled ps-3">
          {links.map((link, index) => {
            const isActive = pathname.includes(link);
            const combinedStyles = {
              color: isActive ? "black" : "#C00",
              paddingLeft: isActive ? "1px": "0px",
              borderLeft: isActive ? "2px solid black": "0px",
              fontWeight: isActive ? "bold" : "normal",
            };
            return (
                <li className="py-2">
                  <Link
                      key={index}
                      to={`/Kanbas/Courses/${courseId}/${link}`}
                      className={`list-group-item text-decoration-none ${isActive && "active"}`}
                      style={combinedStyles}>
                    {link}
                  </Link>
                </li>
            );
          })
          }
        </ul>
      </div>
  );
}


export default CourseNavigation;