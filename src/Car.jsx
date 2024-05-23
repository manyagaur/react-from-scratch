import { useState } from "react"

function Car(){
    const [car,setCar]=useState({year:2024,
                                 company:"Ford",
                                 name:"Figo"})

    function changeYear(e){
        setCar(c=>({...car, year:e.target.value}))         
    }

    function changeCompany(e){
        setCar(c=>({...car, company:e.target.value}))   
    }

    function changeName(e){
        setCar(c=>({...car, name:e.target.value}))            
    }
    
    return(
        <>
        <p>Your favourite car is {car.year} {car.company} {car.name}</p>
        <div className="main"><input type="number" placeholder="Select a year" onChange={changeYear}></input><br></br></div>
        <div className="main"><input type="text" placeholder="Select a company" onChange={changeCompany}></input><br></br></div>
        <div className="main"><input type="text" placeholder="Select a car" onChange={changeName}></input></div>
        </>
    )
}
export default Car