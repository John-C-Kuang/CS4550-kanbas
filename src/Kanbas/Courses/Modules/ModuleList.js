import React from "react";
import {useParams} from "react-router-dom";
import {FaEllipsisV, FaCaretDown, FaCheckCircle, FaPlus} from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {

  const {courseId} = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
      <ul className="list-group mt-2">

        <li className="list-group-item">
          <div className="d-flex row align-content-center justify-content-center">
            <div className="d-flex justify-content-between mb-2 col-9">
              <input
                  value={module.name}
                  onChange={(e) => setModule({
                    ...module, name: e.target.value
                  })}
                  className="form-control me-2 flex-grow-1"
                  placeholder="New Module"
              />
              <textarea
                  value={module.description}
                  onChange={(e) => dispatch(setModule({
                    ...module, description: e.target.value
                  }))}
                  className="form-control flex-grow-1 ms-2"
                  placeholder="New Description"
              />
            </div>
            <div className="col-3 d-flex align-items-center">
              <button
                  className="btn btn-secondary btn-success"
                  onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
              </button>
              <button
                  className="btn btn-secondary btn-warning"
                  onClick={() => dispatch(updateModule(module))}>
                Update
              </button>

            </div>
          </div>
        </li>


        {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <li key={index} className="list-group-item">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action module-subject module-subject-color">
                  <FaEllipsisV/>
                  <FaCaretDown className="pe-2"/>
                  {module.name}
                  <div className="float-end">
                    <button
                        className="btn btn-secondary btn-light dropdown-toggle btn-sm">
                      <FaCheckCircle className="text-success"/>
                    </button>
                    <FaPlus/>
                    <FaEllipsisV className="me-1"/>

                    {/*Edit Module*/}
                    <button
                        className="btn btn-sm btn-warning me-1"
                        onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button>

                    {/*Delete Module*/}
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dispatch(deleteModule(module._id))}>
                      Delete
                    </button>

                  </div>


                </li>
                <li className="list-group-item list-group-item-action module-title">
                  <FaEllipsisV className="pe-2"/>
                  {module.description}
                  <div className="float-end">
                    <FaCheckCircle className="text-success pe-1"/>
                    <FaEllipsisV/>
                  </div>
                </li>
              </ul>
            </li>
        ))}
      </ul>
  );
}

export default ModuleList;
