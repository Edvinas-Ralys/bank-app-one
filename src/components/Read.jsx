//Displaying list of clients
import Show from "./Show"
function Read({clients}) {
  return (
    <ul className="client-display">
        {clients.map(client => (
            <li key={client.id} > <Show client={client} /></li>
        ))}
    </ul>
  )
}

export default Read
