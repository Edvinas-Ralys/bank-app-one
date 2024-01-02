import { useEffect, useState } from "react";
import Create from "./components/Create";
import "./style/App.scss";
import "./style/button.scss";
import { lsStore, lsRead } from "./components/lsManager";
import Read from "./components/Read";
import History from "./components/History";

function App() {
  //Key for array of client objects
  const KEY = `clients`;

  // State for name and last name single object
  const [createClient, setCreateClient] = useState(null);

  // Array of objects, that send info to LS and are displayed
  const [clients, setClients] = useState([]);

  // Creates array of client objects on page load
  //If useEffect array is empty it only fires once when page is loaded
  useEffect((_) => {
    setClients(lsRead(KEY));
  }, []);




  //When createClient is changed - changes are sent to local storage and list is updated
  useEffect(
    (_) => {
      if (null === createClient) {
        return;
      }
      //lsStore return unique ID
      const id = lsStore(KEY, createClient);
      // Adding new client object to array of old client objects. Adding unique ID
      setClients((prevClients) => [...prevClients, { ...createClient, id }]);
    },
    [createClient]
  );



  return (
    <div className="main-page">
      <Create setCreateClient={setCreateClient} createClient={createClient} />
      <History />
      <Read clients={clients} />
    </div>
  );
}

export default App;