import { useState } from "react";



function Counter() {
    let [count, setCount] = useState(0);
    
    function addCounter() {
        // count = count + 1;
        setCount(++count);
        console.log(count);
    }
    function subCounter() {
        setCount(count - 1);
        console.log(count);
    }
    let mulCounter = () => {
        setCount(count * 2);
        console.log(count);
    }
    
    return(
        <>
            <h2>Counter Value: {count}</h2>
            <h2>Counter Value: {count}</h2>
            <h2>Counter Value: {count}</h2>
            <h2>Counter Value: {count}</h2>
            <h2>Counter Value: {count}</h2>
            <button onClick={addCounter}>Add</button>
            <br/>
            <button onClick={subCounter}>Sub</button>
            <br/>
            <button onClick={mulCounter}>2x</button>
        </>
    )
}

export default Counter;