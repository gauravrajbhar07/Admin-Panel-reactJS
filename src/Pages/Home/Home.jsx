import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Widgets from "../../Components/Widgets/Widgets";
import Charts from "../../Components/charts/Charts";
import Featured from "../../Components/featured/Featured";
import "./home.scss";
import Table from "../../Components/Table/Table";

const Home = () => {
  return (
    <div className="home">
      <SideBar />

      <div className="homecontainer">
        <NavBar />
        <div className="widgets">
          <Widgets type="users" />
          <Widgets type="products" />
          <Widgets type="order" />
          <Widgets type="earing" />
        </div>
        <div className="chartsContainer">
          <Featured />
          <Charts />
        </div>

        <div className="listcontainer">
          <div className="listTitle">Latest Transation </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
