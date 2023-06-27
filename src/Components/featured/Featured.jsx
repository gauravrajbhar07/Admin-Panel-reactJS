import React from "react";
import "./featured.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        Total Value
        <MoreVertIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={10} />
        </div>
        <p className="title">Total Sales</p>
        <p className="amount">$430</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          aspernatur libero repellat distinctio obcaecati inventore quasi
          accusamus enim ad officia, amet numquam. Animi aut minus ipsum culpa
          repellendus modi tenetur sit iure labore inventore?
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowUpIcon fontSize="small" /> $12.4K
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negitive">
              <div className="resultAmount">
                <KeyboardArrowDownOutlinedIcon fontSize="small" /> $15.4K
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowUpIcon fontSize="small" /> $102.5K
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
