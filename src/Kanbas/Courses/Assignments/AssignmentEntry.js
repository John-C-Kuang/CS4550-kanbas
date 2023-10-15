import {FaBook, FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import React from "react";

function AssignmentEntry({ title, id, course }) {
  return (
      <li className="list-group-item list-group-item-action should-diplay-green-bar">
        <div className="row">
          <div className="col-1">
            <FaEllipsisV />
            <FaBook className="text-success" />
          </div>
          <div className="col-10">
            <p className="assignment-title py-0 my-0">{title}</p>
            <p className="py-0 my-0">{course}</p>
            <p className="py-0 my-0">{id}</p>
          </div>
          <div className="col-1">
            <FaCheckCircle className="text-success" />
            <FaEllipsisV />
          </div>
        </div>
      </li>
  );
}

export default AssignmentEntry;
