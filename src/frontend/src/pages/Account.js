// #region Imports

// Styles
import { accountStyles } from "../features/account/index";

// Components
import { Link, Outlet, useLocation } from "react-router-dom";
import Divider from "../components/Divider";

// #endregion

/**
 * Account Page
 */
const Account = () => {
  // Page Location
  const location = useLocation();

  return (
    <div className="account">
      <div className="account__navigation">
        <Link
          className={`account__link ${
            location.pathname == "/account" ||
            location.pathname == "/account/bookings"
              ? "account__link--active"
              : ""
          }`}
          to="bookings"
        >
          <div className="account__link-text h3">bookings</div>
          <Divider />
        </Link>
        <Link
          className={`account__link ${
            location.pathname == "/account/messages"
              ? "account__link--active"
              : ""
          }`}
          to="messages"
        >
          <div className="account__link-text h3">messages</div>
          <Divider />
        </Link>
        <Link
          className={`account__link ${
            location.pathname == "/account/settings"
              ? "account__link--active"
              : ""
          }`}
          to="settings"
        >
          <div className="account__link-text h3">settings</div>
          <Divider />
        </Link>
      </div>
      <div className="account__page">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
