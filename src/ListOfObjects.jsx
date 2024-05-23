import React from "react";
import { useState } from "react";

function ListOfObjects(){

const [food, setFood]= useState([])
const [foodName, setFoodName]=useState("")
const [foodQuantity, setFoodQuantity]=useState("")
const [foodDelivery, setFoodDelivery]=useState("")

function handleFoodName(e){
    setFoodName(e.target.value)
}

function handleFoodQuantity(e){
    setFoodQuantity(e.target.value)
}

function handleFoodDelivery(e){
    setFoodDelivery(e.target.value)
}

function handleAddFood(){
    

    const newOrder = {
        name:foodName,
        quantity:foodQuantity,
        delivery:foodDelivery
    }
    console.log(newOrder)
    setFood([...food,newOrder])

}

    return(
        <>
        <h1>Food Orders</h1>
        <label>Food: </label>
        <input type="text" id="name" value={foodName} onChange={handleFoodName} placeholder="Enter name of food"></input><br></br><br></br>
        <label>Quantity: </label>
        <input type="text" id="quantity" value={foodQuantity} onChange={handleFoodQuantity} placeholder="Enter quantity"></input><br></br><br></br>
        <label>Home Delivery/Pickup: </label>
        <input type="text" id="delivery" value={foodDelivery} onChange={handleFoodDelivery} placeholder="Enter mode of delivery"></input><br></br><br></br>
        <button type="button" onClick={handleAddFood}>Add Order</button><br></br><br></br>

        <h4>
            <ul>
            {food.map((food,index)=>(<li key={index}> Ordered {food.quantity} servings of {food.name} for {food.delivery} </li>))}
            </ul>
        </h4>
        </>
    )
}
export default ListOfObjects