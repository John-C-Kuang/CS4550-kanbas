import ModuleList from "../Modules/ModuleList";
import TopBtns from "../TopButtons";
import React from "react";
import Status from "./status";

function Home() {
  return (
      <>
        <div className="col-6">
          <TopBtns/>
          <hr/>

          <ModuleList/>
        </div>

        <Status/>
      </>
  );
}

export default Home;