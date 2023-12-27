import "./style/reset.scss";
import "./style/App.scss";
import "./style/button.scss";
import ClientForm from "./components/ClientForm";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ClientList from "./components/ClientList";

function App() {
  const [clientForm, setClientForm] = useState(false);
  const addClient = () => {
    setClientForm(!clientForm);
  };

  const [clients, setClients] = useState([]);
  const checkClients = () => {
    console.log(clients);
  };
  return (
    <div className="App">
      <ClientList
        clients={clients}
        setClients={setClients}
        clientForm={clientForm}
        setClientForm={setClientForm}
        addClient={addClient}
      />
      <button onClick={checkClients}>Check</button>
    </div>
  );
}

export default App;
