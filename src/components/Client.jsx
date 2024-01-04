function Client({item}) {
  return (
    <>
      <div className="client-name">
        {item.name} {item.lastName}
        <div className="account">{item.account}</div>
      </div>

      <span className="balance">{item.balance} €</span>
    </>
  );
}

export default Client;
