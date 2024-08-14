import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LocalStore from "./utils/localStorage";
import { SIDEBAR_ITEM_HREF } from "./utils/constans/sidebar";
import PageNotFound from "./pages/404";
import Login from "./pages/login";

function MyRoutes() {
  const accessToken = LocalStore.getInstance().read("accessToken");

  return (
    <Router>
      <Routes>
        {accessToken ? (
          <>
            <Route />
            <Route />
          </>
        ) : <Route path={SIDEBAR_ITEM_HREF.home} element={<Login />} />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes