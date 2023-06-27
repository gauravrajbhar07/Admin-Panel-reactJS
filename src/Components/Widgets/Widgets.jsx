import React from "react";
import "./widgets.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PersonIcon from "@mui/icons-material/Person";

const Widgets = ({ type }) => {
  let data = {};
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "User",
        isMoney: false,
        link: "See All users",
        icon: (
          <PersonIcon
            style={{
              color: "rgb(210, 84, 84)",
              backgroundColor: "rgb(234, 178, 178)",
              padding: "3px",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View All Order",
        icon: (
          <ShoppingCartIcon
            style={{
              color: "#F6BE00",
              backgroundColor: "lightyellow",
              padding: "3px",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
        ),
      };
      break;

    case "earing":
      data = {
        title: "Earning",
        isMoney: true,
        link: "See All Earning",
        icon: (
          <AttachMoneyOutlinedIcon
            style={{
              color: "green",
              backgroundColor: "lightgreen",
              padding: "3px",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "See Details",
        icon: (
          <AccountBalanceWalletIcon
            style={{
              color: "rebeccapurple",
              backgroundColor: "violet",
              padding: "3px",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="Widgets">
      <div className="left">
        <spam className="title">{data.title}</spam>
        <spam className="counter">
          {data.isMoney && "$"} {amount}
        </spam>
        <spam className="link">{data.link}</spam>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <div className="percentage">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widgets;
