import {useState} from "react";
import {Link} from "react-router-dom";
import db from "../Database";
import styles from '../style';

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses(
        [
          ...courses,
          {...course, _id: new Date().getTime()},
        ]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
    );
  };

  return (<div>
    <h2>Dashboard</h2>

    <h5>Course</h5>
    <input value={course.name} className="form-control"
           onChange={(e) => setCourse({...course, name: e.target.value})}/>
    <input value={course.number} className="form-control"
           onChange={(e) => setCourse({...course, number: e.target.value})}/>
    <input value={course.startDate} className="form-control" type="date"
           onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
    <input value={course.endDate} className="form-control" type="date"
           onChange={(e) => setCourse({...course, endDate: e.target.value})}/>

    <button className="btn btn-secondary btn-success me-1"
            onClick={addNewCourse}>Add
    </button>

    <button className="btn btn-secondary btn-warning" onClick={updateCourse} >
      Update
    </button>


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

                  {/*Edit this course*/}
                  <button className="btn btn-sm btn-warning me-1"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}>Edit
                  </button>
                  {/*Delete this course*/}
                  <button className="btn btn-sm btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}>
                    Delete
                  </button>

                </div>
              </div>
            </div>
          </Link>
      ))}
    </div>
  </div>);
}

export default Dashboard;
