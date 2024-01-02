import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

function Delete() {
  return (
    <div className="modal">
      <div className="modal-header">
        <div className="header-text">Sąskaitos panaikinimas</div>
        <div className="header-x">
          <Icon path={mdiClose} size={1} />
        </div>
      </div>
      <div className="modal-message">Sąskaita už panaikinta. Ar sutinkate?</div>
      <div className="buttons">
        <button>Panaikinti sąskaitą</button>
        <button>Atšaukti</button>
      </div>
    </div>
  );
}

export default Delete;
