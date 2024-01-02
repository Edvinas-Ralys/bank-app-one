import Icon from "@mdi/react";
import {
  mdiCashMultiple,
  mdiAccountOutline,
  mdiMailboxUpOutline,
  mdiLogout,
  mdiWalletBifoldOutline,
  mdiCreditCardMultipleOutline,
  mdiCashSync,
  mdiBank,
  mdiCogOutline,
} from "@mdi/js";

function NavBarLeft() {
  return (
    <div className="navigation-bar">
      <div className="logo">
        <Icon className="bank-logo" path={mdiCashMultiple} size={3} />
        <p>Money Bank</p>
      </div>
      <div className="profile">
        <div className="user">
          <Icon path={mdiAccountOutline} size={2} />
        </div>
        <div className="user-opt">
          <div className="messages">
            <Icon path={mdiMailboxUpOutline} size={2} />
          </div>
          <div className="log-out">
            <Icon path={mdiLogout} size={2} />
          </div>
        </div>
      </div>
      <div className="account">
        <Icon path={mdiWalletBifoldOutline} size={3} />
        <p>My accounts</p>
      </div>
      <div className="cards">
        <Icon path={mdiCreditCardMultipleOutline} size={3} />
        <p>My cards</p>
      </div>
      <div className="payments">
        <Icon path={mdiCashSync} size={3} />
        <p>Payments</p>
      </div>
      <div className="products">
        <Icon path={mdiBank} size={3} />
        <p>Bank products</p>
      </div>
      <div className="settings">
        <Icon path={mdiCogOutline} size={3} />
        <p>Settings</p>
      </div>
    </div>
  );
}

export default NavBarLeft;
