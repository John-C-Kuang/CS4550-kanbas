import React, { useState } from 'react';
import { FaTimes, FaPlus } from 'react-icons/fa';

function EditDetail() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
      <div className="container py-4">

        <div className="row d-flex">
          <div className="col-3">
            <p className="float-end px-3 py-0">Points: </p>
          </div>

          <div className="col-7">
            <input type="text" className="form-control" value="100"/>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-3">
            <p className="float-end px-2 py-0">Assignment Group: </p>
          </div>

          <div className="col-7">
            <div className="dropdown">
              <button style={{width: "100%"}}
                      className="btn btn-light dropdown-toggle btn-block text-start"
                      type="button"
                      id="as-group-dropdown" data-bs-toggle="dropdown"
                      aria-expanded="false">
                <span className="text-start">ASSIGNMENTS</span>
              </button>

              <ul className="dropdown-menu"
                  aria-labelledby="assignment-group-options">
                <li><a className="dropdown-item" href="#">ASSIGNMENTS</a></li>
                <li><a className="dropdown-item" href="#">Another action</a>
                </li>
                <li><a className="dropdown-item" href="#">Something else
                  here</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-3">
            <p className="float-end px-2 py-0">Display Grade as: </p>
          </div>

          <div className="col-7">
            <div className="dropdown">
              <button style={{width: "100%"}}
                      className="btn btn-light dropdown-toggle btn-block text-start"
                      type="button"
                      id="display-grade-as-dropdown" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Percentage
              </button>
              <ul className="dropdown-menu" aria-labelledby="grade-as-options">
                <li><a className="dropdown-item" href="#">Percentage</a></li>
                <li><a className="dropdown-item" href="#">Another action</a>
                </li>
                <li><a className="dropdown-item" href="#">Something else
                  here</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="row d-flex">
          <div className="col-3"></div>

          <div className="col-7">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                     id="do-not-count-toward-final" />
                <label className="form-check-label"
                       htmlFor="do-not-count-toward-final">
                  Do not count this assignment towards the final grade
                </label>
            </div>
          </div>
        </div>


        <div className="row d-flex">
          <div className="col-3">
            <p className="float-end px-2 py-0">Submission Type: </p>
          </div>


          <div className="col-7">
            <div>
              <form className="rounded border p-3">
                <div className="form-group mb-4">
                  <div className="dropdown">
                    <button
                        className="btn btn-light dropdown-toggle btn-block text-start w-100"
                        type="button" id="submission-options"
                        data-bs-toggle="dropdown">
                      Online
                    </button>
                    <ul className="dropdown-menu"
                        aria-labelledby="submission-options-menu">
                      <li><a className="dropdown-item">Online</a></li>
                      <li><a className="dropdown-item">Onsite</a></li>
                    </ul>
                  </div>
                </div>

                <span><b>Online Entry Options</b></span>

                <div className="form-check mt-1">
                  <input className="form-check-input" type="checkbox"
                         id="text-entry" checked="" />
                    <label className="form-check-label" htmlFor="text-entry">Text
                      Entry</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"
                         id="web-url" checked="" />
                    <label className="form-check-label" htmlFor="web-url">Website
                      URL</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"
                         id="media-recordings"
                         checked="" />
                    <label className="form-check-label"
                           htmlFor="media-recordings">Media
                      Recordings</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"
                         id="student-annotation" />
                    <label className="form-check-label"
                           htmlFor="student-annotation">Student
                      Annotation</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"
                         id="file-uploads" />
                    <label className="form-check-label" htmlFor="file-uploads">File
                      Uploads</label>
                </div>
              </form>
            </div>
          </div>

          <div className="row d-flex">
            <div className="col-3">
              <p className="float-end px-3 py-0">Assign to: </p>
            </div>

            <div className="col-7">
              <form className="rounded border p-3">
                <span><b>Assign to</b></span>
                <div className="w-100 bg-white border my-2">
                  <button className="btn btn-light d-flex align-items-center">
                    <span className="mx-2">Everyone</span>
                    <i className="fas fa-times float-end"></i>
                  </button>
                </div>

                <span><b>Due</b></span>
                <div className="w-100 bg-white border my-2">
                  <input type="date" className="form-control"
                         value="2023-09-08" />
                </div>
                <div className="row">
                  <div className="col-6 justify-content-start">
                    <span><b>Available From</b></span>
                    <input type="date" className="form-control"
                           value="2023-09-06" />
                  </div>

                  <div className="col-6 justify-content-start">
                    <span><b>Until</b></span>
                    <input type="date" className="form-control"
                           value="2023-09-18" />
                  </div>
                </div>

                <button className="btn btn-light w-100 mt-2">
                  <i className="fas fa-plus"></i> Add
                </button>

              </form>
            </div>
          </div>
        </div>


      </div>
  );
}

export default EditDetail;
