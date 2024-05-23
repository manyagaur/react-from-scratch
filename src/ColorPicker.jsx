import { useState } from "react"

function ColorPicker(){
    const [color,setColor]=useState("white")

    const changeColor=(e)=>
        setColor(e.target.value)
return(
    <>
    
    <h1>Color Picker</h1><br></br>
    <div className="center"><div className="box" style={{backgroundColor:color}}>Selected Color:{color}</div></div><br></br>
    <label className="center">Select a Color:</label><br></br>
    <div className="center"><input type="color" value={color} onChange={changeColor}></input></div>
    </>
)
}
export default ColorPicker