import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";


const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return(
      <>
        <h1>Assignment 4</h1>
        <ReduxExamples/>
        <ParentStateComponent/>
        <ChildStateComponent/>
        <ArrayStateVariable/>
        <ObjectStateVariable/>
        <DateStateVariable/>
        <StringStateVariables/>
        <BooleanStateVariables/>
        <Counter/>
        <EventObject/>
        <PassingFunctions theFunction={sayHello} />
        <PassingDataOnEvent/>
        <Add a={1} b={2} />
        <ClickEvent/>
      </>
  );
};
export default Assignment4;
