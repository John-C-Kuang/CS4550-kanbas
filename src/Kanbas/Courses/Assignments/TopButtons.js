import {FaEllipsisV, FaPlus} from "react-icons/fa";
import React from "react";

function TopButtons() {
  return (
      <>
        <div className="input-group float-end w-50 px-2"
             id="course-home-top-btns">
          <input type="text" className="form-control"
                 placeholder="Search for Assignment"/>
          <button className="btn btn-secondary btn-light btn-sm">
            <FaPlus className="text-black"
                    style={{transform: 'scaleX(0.8) scaleY(0.8)'}}/>
            Cancelz
          </button>
          <button className="btn btn-secondary btn-danger text-white btn-sm">
            <FaPlus className="text-white"
                    style={{transform: 'scaleX(0.8) scaleY(0.8)'}}/>
            Assignment
          </button>
          <button className="btn btn-secondary btn-light btn-sm">
            <FaEllipsisV/>
          </button>
        </div>


        <div className="clearfix"></div>
      </>
  )
}

export default TopButtons;
