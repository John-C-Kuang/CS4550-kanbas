import {FaCheckCircle} from "react-icons/fa";
import React from "react";

function TopBtns() {
  return (
      <div
          className="d-flex pe-2 justify-content-center align-items-center pb-3"
          id="course-home-top-btns">
        <button className="btn btn-secondary btn-light">Cancel</button>
        <button className="btn btn-secondary btn-light">View Progress</button>

        <div className="dropdown">
          <button className="btn btn-secondary btn-light dropdown-toggle">
            <FaCheckCircle className="text-success"/> Publish All
          </button>
        </div>

        <button className="btn btn-secondary btn-danger text-white">Save Profile
        </button>
      </div>
  );
}

export default TopBtns;
