import React, { useEffect, useState } from "react";
import "./widgets.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const Widgets = ({ type }) => {
  const [amount, setamount] = useState(null);
  const [diff, setdiff] = useState(null);

  let data;

  //temp data
  // const amount = 100;
  // const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "Users",
        // isMoney: false,
        query: "users",
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
        query: "order",
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
        query: "earing",
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

    case "products":
      data = {
        title: "Products",
        // isMoney: true,
        query: "products",
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

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      console.log(prevMonth);

      const lastMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );

      const prevMonthQuery = query(
        collection(db, data.query),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const LastMonthData = await getDocs(lastMonthQuery);
      const prevMonthData = await getDocs(prevMonthQuery);

      setamount(LastMonthData.docs.length);
      setdiff(
        ((LastMonthData.docs.length - prevMonthData.docs.length) /
          LastMonthData.docs.length) *
          100
      );

      console.log(LastMonthData.docs.length);
    };
    fetchData();
  }, []);

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
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}
        </div> */}
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          {diff} %
        </div>
        <div className="percentage">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widgets;
