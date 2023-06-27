import "./SideBar.scss";
import { React, useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";

const SideBar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="Sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Pannel</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <span>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icons" />
                DashBoard
              </li>
            </Link>
          </span>
          <p className="title">LIST</p>
          <span>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonIcon className="icons" />
                User
              </li>
            </Link>
          </span>
          <span>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                {" "}
                <StoreIcon className="icons" />
                Products
              </li>
            </Link>
          </span>
          <span>
            <li>
              <CreditCardIcon className="icons" />
              Order
            </li>
          </span>
          <span>
            <li>
              <LocalShippingIcon className="icons" />
              Delivery
            </li>
          </span>
          <p className="title">USEFULL</p>
          <span>
            <li>
              <AnalyticsIcon className="icons" />
              Stats
            </li>
          </span>
          <span>
            <li>
              <NotificationsIcon className="icons" />
              Notification
            </li>
          </span>
          <p className="title">SERVICE</p>
          <span>
            <li>
              <HealthAndSafetyIcon className="icons" />
              Health System
            </li>
          </span>
          <span>
            <li>
              <PsychologyIcon className="icons" />
              Logs
            </li>
          </span>
          <span>
            <li>
              <SettingsIcon className="icons" />
              Setting
            </li>
          </span>
          <p className="title">USER</p>
          <span>
            <li>
              <AccountCircleIcon className="icons" />
              Profile
            </li>
          </span>
          <span>
            <li>
              <LogoutIcon className="icons" />
              Logout
            </li>
          </span>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default SideBar;
