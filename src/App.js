import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Single from "./Pages/single/Single";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Porduct from "./Pages/product/Product";
// import { userInputs } from "./fromSource";
import { productInputs, userInputs } from "./fromSource";
import "./style/dark.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useContext, useReducer } from "react";
import { DarkModeContext } from "./Context/darkModeContext";

import { AuthContext } from "../src/Context/authContext";
import Product from "./Pages/product/Product";
import ProductList from "./Pages/List/ProductList";
import NewProduct from "./Pages/New/NewProduct";

function App() {
  // const [dark, setDark] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  // const currentUser = true;
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            {/* <Route index element={<Login />}></Route> */}

            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <ProductList />
                  </RequireAuth>
                }
              />
              <Route
                path=":productsId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewProduct
                      inputs={productInputs}
                      title="Add New Product"
                    />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
