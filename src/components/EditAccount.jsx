import { useEffect, useState } from "react";

function EditAccount({ editData, setEditData, setUpdateData, setEditedBalance }) {
  const [amount, setAmount] = useState(``);

  const addFunds = (_) => {
    const currentBalance = editData.balance;
    const newBalance = Number(currentBalance) + Number(amount);
    setUpdateData({ ...editData, balance: newBalance });
    setEditedBalance(`Lėšos pridėtos į sąskaitą`)
    setAmount(``);
  };

  const removeFunds = (_) => {
    const currentBalance = editData.balance;
    const newBalance = Number(currentBalance) - Number(amount);
    setUpdateData({ ...editData, balance: newBalance });
    setEditedBalance(`Lėšos išimtos iš sąskaitos`)
    setAmount(``);
  };


  if (null === editData) {
    return (
      <div className="edit-field">
        <div className="main-field inactive">
          <div className="name-section inactive">
            <p>Pavardė, Vardas</p>
          </div>
          <div className="balance-section inactive">
            <p>Likutis:</p>
          </div>
          <div className="account-section inactive">
            <p>Sąskaitos numeris:</p>
          </div>
          <div className="created-date inactive">Sukurta:</div>
          <div className="add-funds inactive">
            <label htmlFor="">Tvarkyti lėšas</label>
            <input
              type="number"
              name=""
              id=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="fund-buttons inactive">
              <button className="add">Pridėti lėšų</button>
              <button className="remove">Išimti lėšų</button>
            </div>
          </div>
          <button className="save-edit">Išsaugoti</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="edit-field">
        <div className="main-field">
          <div className="name-section">
            <p>
              {editData.lastName}, {editData.name}
            </p>
          </div>
          <div className="balance-section">
            <p>Likutis: <b>{editData.balance}€</b></p>
          </div>
          <div className="account-section">
            <p>Sąskaitos numeris: <b>{editData.accountNumber}</b></p>
          </div>
          <div className="created-date">Sukurta: <b>{editData.created}</b></div>
          <div className="add-funds">
            <label htmlFor="">Tvarkyti lėšas</label>
            <input
              type="number"
              name=""
              id=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className={`fund-buttons ${amount === `` ? `inactive` : null}`}>
              <button onClick={addFunds} className="add">
                Pridėti lėšų
              </button>
              <button onClick={removeFunds} className="remove">
                Išimti lėšų
              </button>
            </div>
          </div>
          <button onClick={(_) => setEditData(null)} className="save-edit">
            Išsaugoti
          </button>

        </div>
      </div>
    );
  }
}

export default EditAccount;
