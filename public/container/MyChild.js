import React, { useState } from "react";

const MyChild = (props) => {
  const [name, setValue] = useState("");
  let [counter, setCounter] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const submitData = () => {
    props.passName(name);
  };
  const incrementCounter = () => {
    setCounter(++counter);
    props.fetchCounterFromChild(counter);
  };
  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <button value="OK" onClick={submitData}>
        OK
      </button>
      <button onClick={incrementCounter}>Add</button>
    </div>
  );
};

export default MyChild;
