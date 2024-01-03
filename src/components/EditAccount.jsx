function EditAccount({editData, setEditData}) {

    if(null === editData){
        return (
            <div className="edit-field">
              <div className="main-field inactive">
                <div className="name-section inactive">
                  <p>Vardas, Pavardė</p>
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
                <input type="number" name="" id="" />
                <div className="fund-buttons inactive">
                    <button className="add">Pridėti lėšų</button>
                    <button className="remove">Išimti lėšų</button>
                </div>
            </div>
            <button  className="save-edit">Išsaugoti</button>
            <div className="transaction-history">
                <div className="history-name">
                    <p>Operacių istorija</p>
                </div>
                <div className="history-field">

                </div>
            </div>
              </div>
            </div>
          );
    } else {
        return (
            <div className="edit-field">
              <div className="main-field">
                <div className="name-section">
                  <p>{editData.lastName}, {editData.name}</p>
                </div>
                <div className="balance-section">
                  <p>Likutis: {editData.balance}</p>
                </div>
                <div className="account-section">
                  <p>Sąskaitos numeris: {editData.accountNumber}</p>
                </div>
                <div className="created-date">Sukurta: {editData.created}</div>
            <div className="add-funds">
                <label htmlFor="">Tvarkyti lėšas</label>
                <input type="number" name="" id="" />
                <div className="fund-buttons">
                    <button className="add">Pridėti lėšų</button>
                    <button className="remove">Išimti lėšų</button>
                </div>
            </div>
            <button onClick={_=>setEditData(null)} className="save-edit">Išsaugoti</button>
            <div className="transaction-history">
                <div className="history-name">
                    <p>Operacių istorija</p>
                </div>
                <div className="history-field">

                </div>
            </div>
              </div>
            </div>
          );
    }

}

export default EditAccount;
