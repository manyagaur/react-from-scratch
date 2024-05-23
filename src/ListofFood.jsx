import { useState } from "react";

function ListofFood(){
    const [food,setFood]= useState(["Chaap", "Pizza", "Burger"])
    
    function handleFood(){
        const newFood=document.getElementById("newFood")
        console.log(newFood)
        setFood(...food,newFood)
    }

    return(
    <>
    <h1>List of Food (Rendering Lists)</h1>
    <ul>
        {food.map((food,index)=><li key={index}>{food}</li>)}
    </ul>
    <input type="text" id="newFood" placeholder="Enter food name"></input>
    <button type="button" onClick={handleFood}>Add food</button>
    </>
    )

}
export default ListofFood