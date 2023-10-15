import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaCaretDown, FaCheckCircle, FaPlus } from 'react-icons/fa';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
      <ul className="list-group mt-2">
        {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <li key={index} className="list-group-item">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action module-subject module-subject-color">
                  <FaEllipsisV />
                  <FaCaretDown className="pe-2"/>
                  {module.name}
                  <div className="float-end">
                    <button className="btn btn-secondary btn-light dropdown-toggle btn-sm">
                      <FaCheckCircle className="text-success" />
                    </button>
                    <FaPlus />
                    <FaEllipsisV />
                  </div>
                </li>
                <li className="list-group-item list-group-item-action module-title">
                  <FaEllipsisV className="pe-2"/>
                  {module.description}
                  <div className="float-end">
                    <FaCheckCircle className="text-success pe-1" />
                    <FaEllipsisV />
                  </div>
                </li>
              </ul>
            </li>
        ))}
      </ul>
  );
}

export default ModuleList;
