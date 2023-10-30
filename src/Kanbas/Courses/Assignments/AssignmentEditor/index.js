import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import {FaCheckCircle} from "react-icons/fa";
import {MdMoreVert} from 'react-icons/md';
import EditDetail from "./EditDetails";
import {useDispatch, useSelector} from "react-redux";
import {
  addOrEditAssignments,
  deleteAssignments,
  setAssignment
} from "../AssignmentReducer";

function AssignmentEditor() {
  const {courseId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignment = useSelector((state) => state.assignmentReducer.assignment)


  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
      <div className="col-8">


        <div className="float-end">
          <button
              className="btn btn-secondary btn-light"
              style={{color: "green"}}
          >
            <FaCheckCircle className="text-success"/> Published

          </button>
          <button className="btn btn-secondary btn-light">
            <MdMoreVert/>
          </button>
        </div>


        <hr className="mt-5"/>

        <h5>Assignment Name</h5>
        <input value={assignment.title}
               className="form-control mb-2"
               onChange={(e) =>
                   dispatch(setAssignment({
                   ...assignment, title: e.target.value
                 }))
               }
               placeholder="New Assignment"/>


        <EditDetail/>


        <hr/>

        <div className="row">
          <div className="col-8">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                     id="notify-users-of-changes"/>
              <label className="form-check-label"
                     htmlFor="notify-users-of-changes">
                Notify users that this content has been changed
              </label>
            </div>
          </div>

          <div className="col-4">
            <div className="float-end">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button className="btn btn-secondary btn-light">Cancel</button>
              </Link>
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button
                    className="btn btn-secondary btn-danger text-white"
                    onClick={() => dispatch(addOrEditAssignments(assignment))}>
                  Save
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AssignmentEditor;