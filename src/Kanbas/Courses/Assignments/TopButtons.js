import {FaEllipsisV, FaPlus} from "react-icons/fa";
import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAssignment} from "./AssignmentReducer";

function TopButtons({courseId}) {
  const dispatch = useDispatch()
  const defaultAssignment = {
    _id: null, title: "New Title", course: courseId
  }
  return (
      <>
        <div className="input-group float-end w-50 px-2"
             id="course-home-top-btns">
          <input type="text" className="form-control"
                 placeholder="Search for Assignment"/>
          <button className="btn btn-secondary btn-light btn-sm">
            <FaPlus className="text-black"
                    style={{transform: 'scaleX(0.8) scaleY(0.8)'}}/>
            Cancel
          </button>
          <Link
              key={"New"}
              to={`/Kanbas/Courses/${courseId}/Assignments/Create`}
              className="text-white"
              onClick={() => dispatch(setAssignment(defaultAssignment))}
          >

            <button className="btn btn-danger">
              <FaPlus className="text-white"
                      style={{transform: 'scaleX(0.8) scaleY(0.8)'}}/>
              Assignment
            </button>
          </Link>
          <button className="btn btn-secondary btn-light btn-sm">
            <FaEllipsisV/>
          </button>
        </div>


        <div className="clearfix"></div>
      </>
  )
}

export default TopButtons;
