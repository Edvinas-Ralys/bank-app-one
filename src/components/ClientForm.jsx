import { useEffect, useState } from "react";

function ClientForm({ setClients, setClientForm, clientForm, clients }) {

  const handleAddClient = () => {
    const newClient = { name: clientName, lastName: clientLastName };

    setClients((c) => [...c, newClient]);
    setClientForm(!clientForm)
  };




  const [clientName, setClientName] = useState(``);
  const [clientLastName, setClientlastName] = useState(``);

  const handleClientName = (e) => {
    setClientName(e.target.value);
    console.log(clientName);
  };

  const handleClientLastName = (e) => {
    setClientlastName(e.target.value);
  };


  const cancelForm = () => {
    setClientForm(!clientForm);
  };
  return (
    <div>
      <div className="client-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={clientName}
          onChange={(e) => handleClientName(e)}
        />
      </div>
      <div className="client-form">
        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          value={clientLastName}
          onChange={(e) => handleClientLastName(e)}
        />
      </div>
      <button onClick={handleAddClient} className="save-button">
        Save
      </button>
      <button onClick={cancelForm} className="save-button">Cancel</button>
    </div>
  );
}

export default ClientForm;
