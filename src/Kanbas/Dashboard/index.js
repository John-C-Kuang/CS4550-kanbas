import {Link, Route, Routes} from "react-router-dom";
import db from "../Database";
import styles from '../style';
import Courses from "../Courses";

function Dashboard() {
  const courses = db.courses;
  return (<div>
        <h2>Dashboard</h2>

        <hr/>
        <h3>Published Courses ({courses.length})</h3>

        <div className="d-flex justify-content-start flex-row flex-wrap">
          {courses.map((course) => (
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}
                    className="list-group-item p-1">
                <div className={`${styles.flexCardItem}`}>
                  <div className="card"
                       style={{width: "260px", height: "20rem"}}>
                    <svg width="100%" height="100%"
                         xmlns="http://www.w3.org/2000/svg"
                         className="card-img-top">
                      <rect width="100%" height="100%" fill="#ccad6b"/>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">{course.name}</h5>
                      <div className="card-text">
                        <p className="course-card-description-text">{course.number} {course._id}</p>
                        <p className="course-card-additional-description-text">{course.startDate} to {course.endDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </div>);
}

export default Dashboard;
