import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisV, FaCaretDown, FaCheckCircle, FaPlus, FaBook } from 'react-icons/fa';
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);
  return (
      <div className="col-8">
        <ul className="list-group mt-5">

          {/*Assignment Title*/}
          <li
              className="list-group-item list-group-item-action"
              style={{backgroundColor: "#e7e6e6", fontSize: "16px", fontWeight: "bold"}}
          >
            <FaEllipsisV />
            <FaCaretDown />
            Assignments
            <div className="float-end">
              <button className="btn btn-secondary btn-light dropdown-toggle btn-sm">
                <FaCheckCircle className="text-success" />
              </button>
              <FaPlus />
              <FaEllipsisV />
            </div>
          </li>

          <div className="list-group">
            {courseAssignments.map((assignment) => (
                <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item">

                  <li className="list-group-item list-group-item-action should-diplay-green-bar">
                    <div className="row">
                      <div className="col-1">
                        <FaEllipsisV />
                        <FaBook className="text-success" />
                      </div>
                      <div className="col-10">
                        <p className="assignment-title py-0 my-0">{assignment.title}</p>
                        <p className="py-0 my-0">{assignment.course}</p>
                        <p className="py-0 my-0">{assignment._id}</p>
                      </div>
                      <div className="col-1">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV />
                      </div>
                    </div>
                  </li>


                </Link>
            ))}
          </div>
        </ul>
      </div>
  );
}
export default Assignments;