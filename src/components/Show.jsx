import { useState } from "react";

//Dispalys single client
function Show({ client, setDeleteData, setEditData}) {




  return (
    <div className="client-card">
      <div className="client">
        <div className="client-information">
          <div className="client-name">
            {client.name} {client.lastName}
          </div>
        </div>
        <div className="account-balance">{client.balance}€</div>
      </div>
      <div className="manage-account">
        <button onClick={_=>setEditData(client)} className="manage-account-button">Valdyti sąskaitą</button>
        <button onClick={_=>setDeleteData(client)} className="delete-account">Pašalinti sąskaitą</button>
      </div>
    </div>
  );
}

export default Show;
