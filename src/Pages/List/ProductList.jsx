import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
// import NavBar from "../../Components/NavBar/NavBar";
import "./list.scss";
import Datatable from "../../Components/DataTable/Datatable";
import NavBar from "../../Components/NavBar/NavBar";
import { collection, getDocs } from "firebase/firestore";
import Product from "../product/Product";
const ProductList = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
