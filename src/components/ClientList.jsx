import ClientForm from "./ClientForm";

function ClientList({
  setClients,
  clients,
  clientForm,
  setClientForm,
  addClient,
}) {

let clientsInStorage = JSON.parse(localStorage.getItem(`clientsList`))

  return (
    <>
      <div>
        <ul>
          {clientsInStorage !== null
            ? clientsInStorage.map(
                (client, index) => (
                  <li key={index}>
                    <div className="client">
                        <p className="name">
                          {client.name} {client.lastName}
                        </p>
                        <p className="account">Sąskaita: {client.accountNumb}</p>
                        <p className="balance">Likutis: {client.balance} €</p>
                    </div>
                  </li>
                )
              )
            : null}
        </ul>
        {clientForm ? (
          <ClientForm
            clients={clients}
            setClients={setClients}
            setClientForm={setClientForm}
            clientForm={clientForm}
          />
        ) : (
          <button onClick={addClient}>Add bank account</button>
        )}
      </div>
    </>
  );
}

export default ClientList;
