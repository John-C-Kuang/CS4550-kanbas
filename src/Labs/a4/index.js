import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";


const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return(
      <>
        <h1>Assignment 4</h1>
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
