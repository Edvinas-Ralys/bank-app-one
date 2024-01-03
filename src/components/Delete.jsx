import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

function Delete({ deleteData, setDestroyData, setDeleteData}) {
  if (null === deleteData) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Patvirtinimas</h5>
            <button  type="button" className="close-modal" onClick={_=> setDeleteData(null)}>
            <Icon path={mdiClose} size={1} />
            </button>
          </div>
          <div className="modal-body">
            <p> {deleteData.name} {deleteData.lastName} sąskaita bus panaikinta</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="button-modal cancel" onClick={_=> setDeleteData(null)}>
              Atšaukti
            </button>
            <button type="button" className="button-modal" onClick={_=>setDestroyData(deleteData)} >
              Panaikinti sąskaitą
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Delete;
