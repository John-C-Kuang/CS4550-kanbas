import React from 'react';
import ModuleList from "./ModuleList";
import TopBtns from "../TopButtons";

function Modules() {
  return (
      <div className="col-8">
        <div className="row justify-content-center align-items-center">
          <TopBtns/>
          <hr/>

          <ModuleList />
        </div>
      </div>
  );
}

export default Modules;
