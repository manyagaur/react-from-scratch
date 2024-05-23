import { useState } from "react";

function ListofFood(){
    const [food,setFood]= useState(["Chaap", "Pizza", "Burger"])
    
    function handleFood(){
        const newFoodname=document.getElementById("newFood").value
        console.log(newFoodname)
        setFood([...food,newFoodname])
        document.getElementById("newFood").value=""
    }

    return(
    <>
    
    <h1>List of Food (Rendering Lists)</h1>
    {console.log(food)}
    <ul>
        {food.map((food,index)=>(<li key={index}>{food}</li>))}
    </ul>
    <input type="text" id="newFood" placeholder="Enter food name"></input>
    <button type="button" onClick={handleFood}>Add food</button>
    </>
    )

}
export default ListofFood