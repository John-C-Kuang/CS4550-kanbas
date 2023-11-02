import { FaBook, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import React from "react";
import { useDispatch } from "react-redux";
import {deleteAssignment} from "./AssignmentReducer";

function AssignmentEntry({ title, id, course }) {
  const dispatch = useDispatch()
  return (
      <li className="list-group-item list-group-item-action should-diplay-green-bar">
        <div className="row">
          <div className="col-1">
            <FaEllipsisV />
            <FaBook className="text-success" />
          </div>
          <div className="col-9">
            <p className="assignment-title py-0 my-0">{title}</p>
            <p className="py-0 my-0">{course}</p>
            <p className="py-0 my-0">{id}</p>
          </div>
          <div className="col-2">
            <FaCheckCircle className="text-success" />
            <FaEllipsisV />
            <button
                className="btn btn-sm btn-danger"
                onClick={(e) => {
                  e.preventDefault()
                  const userResponse = window.confirm(`Do you want to delete this assignment ${id}`);
                  if (userResponse) {
                    dispatch(deleteAssignment(id))
                  }
                }}>
              Delete
            </button>
          </div>
        </div>
      </li>
  );
}


export default AssignmentEntry;
