import db from "../../Database";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import ImportExport from "./ImportExport";
import GradeRow from './GradeRow';

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
      <div className="col-8">
        {/*<ImportExport/>*/}
        <SearchBar />

        <div className="table-responsive mt-3">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                  <th>{assignment.title}</th>
              ))}
            </tr>
            </thead>
            <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return <GradeRow key={user._id} user={user} assignments={assignments} grades={db.grades} />;
            })}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default Grades;
