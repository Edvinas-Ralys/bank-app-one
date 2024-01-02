//Displaying list of clients
import Show from "./Show";
function Read({ clients }) {
  return (
    <ul className="client-display">
      {clients
        .sort((a, b) => {
          if (a.lastName < b.lastName) return -1;
          return 1;
        })
        .map((client) => (
          <li key={client.id}>
            {" "}
            <Show client={client} />
          </li>
        ))}
    </ul>
  );
}

export default Read;
