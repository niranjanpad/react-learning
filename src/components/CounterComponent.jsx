import React, { useState } from "react";


const CounterComponent = () => {
    const [count, setCount] = useState(10);
    const [name, setName] = useState('Niranjan');
    
    return(
        <div>
            <p>Name: {name} <button onClick={()=>setName("Padhy")}>Change</button></p>
            <p>Counter value: {count} is {count%2===0 ? "Even": "Odd"}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    ) 
}

export default CounterComponent