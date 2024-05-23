import { useState } from "react"
function Counter(){
    const [count, setCount]=useState(0);

    function handleDecrement(){
        setCount(count=>count-1)}

    function handleReset(){
        setCount(count=>count=0)}

    const handleIncrement=(e)=>
        setCount(count=>count+1)
    return(
        <>
        <div className="zero"><h1>{count}</h1></div>
        <div className="flex">
            <button onClick={handleDecrement}>Decrement </button>
            <button onClick={handleReset}>Reset </button>
            <button onClick={handleIncrement}>Increment </button>
        </div>
        </>  
    )
    } 
export default Counter