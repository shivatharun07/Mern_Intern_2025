import { useState } from "react";

const State = () => {
  const [state, updateState] = useState("State Component");
  const setState = () => {
    updateState("Updated Component");
  }
  return (
    <div>
      <p>This is {state}</p>
      <button onClick={setState}>Update</button>
    </div>
  );
};

export default State;
