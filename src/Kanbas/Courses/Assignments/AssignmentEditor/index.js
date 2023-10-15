import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
      (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
      <div className="col-8">
        <hr/>

        <h5>Assignment Name</h5>
        <input value={assignment.title}
               className="form-control mb-2" />


        <hr />

        <div className="row">
          <div className="col-8">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="notify-users-of-changes" />
              <label className="form-check-label" htmlFor="notify-users-of-changes">
                Notify users that this content has been changed
              </label>
            </div>
          </div>

          <div className="col-4">
            <div className="float-end">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button className="btn btn-secondary btn-light">Cancel</button>
              </Link>
              <button className="btn btn-secondary btn-danger text-white">Save</button>
            </div>
          </div>
        </div>
      </div>
  );
}


export default AssignmentEditor;