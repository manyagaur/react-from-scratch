import React,{useState} from "react"; 

function Form(){
    const[name,setName]=useState("")

    const[quant,setQuant]=useState(0)

    const[inst,setInst]=useState("")

    const[payment,setPayment]=useState("")

    const changeName=(e)=>
        setName(e.target.value)

    const changeQuant=(e)=>
        setQuant(e.target.value)

    const changeInst=(e)=>
        setInst(e.target.value)
    
    const changePayment=(e)=>
        setPayment(e.target.value)

    return(
    <>
    <h1>Form</h1>
    <input type="text" placeholder="Enter Name" onChange={changeName}></input>
    <h3>Name: {name}</h3>
    <input type="number" onChange={changeQuant}></input>
    <h3>Quantity: {quant}</h3>
    <select onChange={changeInst}>
        <option value="Make it spicy">Make it spicy</option>
        <option value="Do not give cutlery">Do not give cutlery</option>
        <option value="Make it less spicy">Make it less spicy</option>
        <option value="Wrap beverages separately">Wrap beverages separately</option>
    </select><br></br>
    <h3>Delivery Instructions: </h3>
    <textarea value={inst}></textarea><br></br>
    
    <h3>Payment: {payment}</h3>
    <input type="radio" value="Cash On Delivery" onChange={changePayment} checked={payment==="Cash On Delivery"} ></input><label>Cash on Delivery</label><br></br>
    <input type="radio" value="Online Payment" onChange={changePayment} checked={payment==="Online Payment"} ></input><label>Online Paymnent</label>
    </>
    )
}
export default Form