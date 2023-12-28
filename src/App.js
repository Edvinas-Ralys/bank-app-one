import "./style/reset.scss";
import "./style/App.scss";
import "./style/button.scss";
import CreateClient from "./components/CreateClient";
import Header from "./components/Header";
import ClientList from "./components/ClientList";
import { useEffect, useState } from "react";
import {lsRead, lsStore} from "./components/lsManager"

function App() {

const [createClient, setCreateClient] = useState(null)
const KEY = `clients`
const [clients, setClients] = useState([])
useEffect(()=>{
  setClients(lsRead(KEY))
}, [])
useEffect(()=>{
  if(createClient === null){
    return
  }
  lsStore(KEY, createClient)
  console.log(createClient)
  // console.log(clients)
}, [createClient])


  return (
    <div className="App">
      <Header />
      <CreateClient setCreateClient={setCreateClient} />
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
