import React from "react";
import "./NavBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import { DarkModeContext } from "../../Context/darkModeContext";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

const NavBar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="icon" />
        </div>

        <div className="itmes">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
              // onClick={() => dispatch({ type: "TOGGLE" })}
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item ">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="avator"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
