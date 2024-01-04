import React from "react";
import Client from "./Client";

function ClientList({ clients }) {
  return (
    <div className="client-list">
      <ul>
        {clients.map((item, index) => (
          <li className="client" key={index}>
            <Client item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
