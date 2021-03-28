import React, { useState } from "react";
import MyChild from "./MyChild";

const MyParent = (props) => {
  const [name, setValue] = useState("");
  let [counter, setCounter] = useState(0);
  const fetchNameFromChild = (name) => {
    setValue(name);
  };
  const fetchCounterFromChild = (counter) => {
    setCounter(counter);
  };
  return (
    <div>
      Show the child value : {name}
      Counter : {counter}
      <MyChild
        passName={fetchNameFromChild}
        fetchCounterFromChild={fetchCounterFromChild}
      />
    </div>
  );
};

export default MyParent;
