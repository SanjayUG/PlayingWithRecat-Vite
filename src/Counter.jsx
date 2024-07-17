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
        // setCount(count * 2);
        
        setCount((prevCount) => prevCount + prevCount); //can accept a function
        console.log(count);
    }
    
    return(
        <>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            <p>Counter Value: {count}</p>
            
            <button onClick={addCounter} className="bg-green-500">Add</button>
            <br/>
            <button onClick={subCounter} className="bg-red-500">Sub</button>
            <br/>
            <button onClick={mulCounter} className="bg-blue-500">2x</button>
        </>
    )
}

export default Counter;