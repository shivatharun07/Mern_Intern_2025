import UseEffect from "./Hooks/UseEffect";
import UseEffectAPI from "./Hooks/UseEffectAPI";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import Props from "./Props";
import State from "./State";
import UseCallback from "./Hooks/UseCallback";
const LearningReact = () => {
  return (
    <div>
      <h1>Learning React</h1>
      <p>This page is all about learning React components.</p>
      <hr />
      <ol>
        <li>
          <Props
            hi="Welcome to Props"
            grade="12"
            age="17"
            img="vite.svg"
          />
        </li>
        <hr />
        {/* <li>Props Task</li> */}
        <li>
          <State />
        </li>
        {/* <li>State Task</li> */}
        <li>
          <h1>Hooks</h1>
          <ul>
            <li><UseState /></li><hr />
            <li><UseEffect /></li><hr />
            {/* <li><UseEffectAPI /></li> */}
            <li><UseRef /></li><hr />
            {/* <li><UseMemo /></li><hr /> */}
            <li><UseCallback /></li>
          </ul>
          
        </li>
      </ol>
      <hr />
    </div>
  );
};

export default LearningReact;
