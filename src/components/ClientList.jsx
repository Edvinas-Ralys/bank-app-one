import ClientForm from "./ClientForm";

function ClientList({
  setClients,
  clients,
  clientForm,
  setClientForm,
  addClient,
}) {
  return (
    <>
      <div>
        <ul>
          {clients.map((client, index) => (
            <li key={index}>
              {client.name} {client.lastName} {client.accountNumb}
            </li>
          ))}
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
