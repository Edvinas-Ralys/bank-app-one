import { useState } from "react";

//Dispalys single client
function Show({ client, setDeleteData, deleteData }) {
  const [showEdit, setShowEdit] = useState(false);
  const clientEdid = (_) => {
    setShowEdit(!showEdit);
  };

  const handleCancel = _ =>{
    setDeleteData(!deleteData)
    console.log(`Hello, world`)
    console.log(deleteData)

  }

  return (
    <div onClick={clientEdid} className="client-card">
      <div className="client">
        <div className="client-information">
          <div className="client-name">
            {client.name} {client.lastName}
          </div>
          <div className="client-account">
            Sąskaitos numeris: {client.accountNumber}
          </div>
        </div>
        <div className="account-balance">{client.balance}€</div>
      </div>
      <div className="manage-account">
        <button className="manage-account-button">Valdyti lėšas</button>
        <button onClick={handleCancel} className="delete-account">Pašalinti sąskaitą</button>
      </div>
    </div>
  );
}

export default Show;
