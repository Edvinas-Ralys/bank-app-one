import { useState } from "react";
import acountNumbGen from "../functions/acountNumbGen";

function CreateClient({setCreateClient}) {
  const [name, setName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [account, setAccount] = useState(``)
  const handleSubmit = () =>{
    const account = acountNumbGen()
    const balance = 0
    setCreateClient({name, lastName, account, balance})
    setName(``)
    setLastName(``)
  }


  return (
    <div className="form">
      <div className="pillars">
        <svg
          className="pillar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" />
        </svg>
        <svg
          className="pillar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" />
        </svg>
      </div>
      <div className="form-input">
        <label htmlFor="name">Vardas:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-input">
        <label htmlFor="last-name">Pavardė:</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Pridėti sąskaitą</button>
    </div>
  );
}

export default CreateClient;
