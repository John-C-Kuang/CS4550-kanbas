import React from "react";
import {FaRegCalendarAlt} from 'react-icons/fa';

function Status() {
  return (
      <div className="col-3">
        <div className="mb-2"></div>

        <button className="btn btn-secondary btn-light w-100">
          Import Existing Content
        </button>
        <button className="btn btn-secondary btn-light w-100">
          Import From Commons
        </button>
        <button className="btn btn-secondary btn-light w-100">
          Choose Home Page
        </button>
        <button className="btn btn-secondary btn-light w-100">
          View Course Stream
        </button>
        <button className="btn btn-secondary btn-light w-100">
          New Announcement
        </button>
        <button className="btn btn-secondary btn-light w-100">
          New Analytics
        </button>
        <button className="btn btn-secondary btn-light w-100 mb-3">
          View Course Notifications
        </button>

        <p><b>To Do</b></p>
        <hr/>

        {/* PLACEHOLDER CHUNKS */}

        <div>
          <p>
            <FaRegCalendarAlt className="me-2"/>
            <a href="#" className="text-decoration-none"
               style={{color: "#C00"}}>
              Grade Assignment 1
            </a>
            <br/>
            <span style={{fontSize: 'small'}}>
                    some course info
                </span>
          </p>
        </div>

        <div>
          <p>
            <FaRegCalendarAlt className="me-2"/>
            <a href="#" className="text-decoration-none"
               style={{color: "#C00"}}>
              Grade Assignment 2
            </a>
            <br/>
            <span style={{fontSize: 'small'}}>
                    some course info
                </span>
          </p>
        </div>


      </div>
  );
}

export default Status;