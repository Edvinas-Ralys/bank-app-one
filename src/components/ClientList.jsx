import React from "react";

function ClientList({ clients }) {
  return (
    <div className="client-list">
      <ul>
        {clients.map((item, index) => (
          <li className="client" key={index}>
            <div className="client-name">
              {item.name} {item.lastName}
              <div className="account">{item.account}</div>
            </div>

            <span className="balance">{item.balance} €</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
