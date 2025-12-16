import { useMemo, useState } from "react";
const slowFunction = (num) => {
    console.log('Calling Slow Function');
    for (let i = 0; i <= 10000000000; i++) {}
    return num * 2;
}
const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [theme,setTheme] = useState(true);
    const styling = {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black'
    };
    
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);
    
  return (
    <div style={styling}>
      <h2 >UseMemo Example</h2>
        <input type="number" value={number} />
        <button onClick={()=>setNumber(number + 1)}>+</button><br />
        <h3>Number is {doubleNumber}</h3>
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
    </div>
  );
};
export default UseMemo;