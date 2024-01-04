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
    [createClient, setClients]
  );

  useEffect(
    (_) => {
      lsDestroy(KEY, destroyData.id);
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
      console.log(`DATA UPDATE`)
      console.log(updateData)
      setClients((prevClients) =>
        prevClients.map((item) =>
          item.id === updateData.id
            ? { ...updateData, id: updateData.id }
            : item
        )
      );
    },
    [updateData]
  );

  return (
    <div className="main-page">
      <NavBarLeft />
      <div className="create-client">
        <Create setCreateClient={setCreateClient} createClient={createClient} />
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
      />
    </div>
  );
}

export default App;
