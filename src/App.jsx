import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
import "./style/App.scss";
import "./style/button.scss";
import { lsStore, lsRead, lsDestroy, lsUpdate } from "./components/lsManager";
import Read from "./components/Read";
import NavBarLeft from "./components/NavBarLeft";
import Delete from "./components/Delete";
import EditAccount from "./components/EditAccount";
import Messages from "./components/Messages";
import { v4 as uuidv4 } from "uuid";

function App() {
  //Key for array of client objects
  const KEY = `clients`;

  // State for name and last name single object
  const [createClient, setCreateClient] = useState(null);

  // Array of objects, that send info to LS and are displayed
  const [clients, setClients] = useState([]);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [editedBalance, setEditedBalance] = useState(``)

  const dispalyMessage = (type, text) => {
    const id = uuidv4();
    setMessages((prevMsg) => [...prevMsg, { id, type, text }]);
    setTimeout((_) => {
      setMessages((prevMsg) => prevMsg.filter((m) => m.id !== id));
    }, 3000);
  };

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
      dispalyMessage(`created`, `Sąskaita ${createClient.name} sukūrta`);
      setClients((prevClients) => [...prevClients, { ...createClient, id }]);
    },
    [createClient, setClients]
  );


  //DESTROY
  useEffect(
    (_) => {
      lsDestroy(KEY, destroyData.id);
      dispalyMessage(`deleted`, `Sąskaita ${destroyData.name} panaikinta`);
      setClients((prevClients) =>
        prevClients.filter((client) => client.id !== destroyData.id)
      );
      setDeleteData(null);
      setEditData(null);
    },
    [destroyData, setClients, setDeleteData, setEditData]
  );

  useEffect(
    (_) => {
      if (null === updateData) {
        return;
      }
      lsUpdate(KEY, updateData, updateData.id);
      setEditData({ ...editData, balance: updateData.balance });
      dispalyMessage(`created`, `${editedBalance} ${updateData.name}`);
      setEditedBalance(``)
      setClients((prevClients) =>
        prevClients.map((item) =>
          item.id === updateData.id
            ? { ...updateData, id: updateData.id }
            : item
        )
      );
    },
    [updateData, setEditData, setClients]
  );

  return (
    <div className="main-page">
      <NavBarLeft />
      <div className="create-client">
        <Create
          messages={messages}
          setCreateClient={setCreateClient}
          createClient={createClient}
        />
        <Read
          clients={clients}
          deleteData={deleteData}
          setDeleteData={setDeleteData}
          setEditData={setEditData}
          editData={editData}
        />
      </div>
      <Delete
        deleteData={deleteData}
        setDeleteData={setDeleteData}
        setDestroyData={setDestroyData}
      />
      <EditAccount
        editData={editData}
        setEditData={setEditData}
        setUpdateData={setUpdateData}
        updateData={updateData}
        setEditedBalance={setEditedBalance}
      />
      <Messages messages={messages} />
    </div>
  );
}

export default App;
