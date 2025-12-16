import { useEffect, useState } from "react";

const UseEffect = () => {
  var [text, updateText] = useState("");
  useEffect(() => {
    console.log(text);
  },[text]);
  return (
    <div>
      <h2>This is Use Effect Hook</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          updateText(e.target.value);
        }}
      />
    </div>
  );
};
export default UseEffect;
