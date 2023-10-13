import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  console.log(courseId)
  return (
      <div className="flex-grow-1">
        <div className="row p-0 mt-3 mb-1 ms-2 align-items-center justify-content-center">
          <div className="col-auto p-0">
            <button className="btn btn-transparent p-2">
              <div className="bg-danger my-1 neu-red" style={{ width: '25px', height: '3px' }}></div>
              <div className="bg-danger my-1 neu-red" style={{ width: '25px', height: '3px' }}></div>
              <div className="bg-danger my-1 neu-red" style={{ width: '25px', height: '3px' }}></div>
            </button>
          </div>

          <div className="col p-0">
            <p className="my-0" style={{fontSize: "18px"}}>{course.name}·{courseId}</p>
          </div>
        </div>



        <hr/>
      </div>
  );
}
export default Courses;