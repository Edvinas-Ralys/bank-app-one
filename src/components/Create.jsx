import { useState } from "react";
import acountNumbGen from "../functions/acountNumbGen"
import currentDate from "../functions/currentDate";
import Messages from "./Messages";

function Create({setCreateClient, messages}) {

    //using state to control inputs
    const [name, setName] = useState(``)
    const [lastName, setLastName] = useState(``)

    // Adding clients as and object. Ready to be transfered to LS
    const addClient = _ =>{
        if(name !== `` && lastName !== ``){
            setCreateClient({name, lastName, accountNumber: acountNumbGen(), balance: 0, created:currentDate()})
            setName(``)
            setLastName(``)
        }
    }

  return(
    //Creating interface for user input
    <div className="client-creation">
        <h2>Pridėti sąskaitą</h2>
        <div className="client-info">
            <div className="client-name">
                <label htmlFor="name">Vardas:</label>
                <input type="text" id="name" value={name} onChange={e=>setName(e.target.value)} />
            </div>
            <div className="client-last-name">
                <label htmlFor="last-name">Pavardė:</label>
                <input type="text" id="last-name" value={lastName} onChange={e=>setLastName(e.target.value)} />
            </div>
        </div>
        <button onClick={addClient}>Pridėti sąskaitą</button>

    </div>
      )
 }



export default Create;
