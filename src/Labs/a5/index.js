import React from "react";
import SimpleAPIExamples from "./SimpleAPIExamples";

function Assignment5() {
  const A5_WELCOME_URL = `${process.env.REACT_APP_API_BASE}/a5/welcome`
  return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={A5_WELCOME_URL}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <SimpleAPIExamples />
      </div>
  );
}

export default Assignment5;
