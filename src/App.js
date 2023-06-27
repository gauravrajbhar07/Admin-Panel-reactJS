import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Single from "./Pages/single/Single";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
// import { userInputs } from "./fromSource";
import { productInputs, userInputs } from "./fromSource";
import "./style/dark.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext, useReducer } from "react";
import { DarkModeContext } from "./Context/darkModeContext";

function App() {
  // const [dark, setDark] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>

            <Route path="login" element={<Login />}>
              <Route index element={<Login />}></Route>
            </Route>

            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              ></Route>
            </Route>

            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productsId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
