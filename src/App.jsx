import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Profile from "./components/Profile";
// import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./components/PageNotFound";
import SignUp from "./components/SignUp";
import PublicRoute from "./components/PublicRoute";

function App() {
  // const token = useSelector((state) => state.token);
  // console.log("token", token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PublicRoute Component={Login} />} />
          <Route path="/signup" element={<PublicRoute Component={SignUp} />} />
          <Route path="/" element={<ProtectedRoute Component={DashBoard} />} />
          {/* <Route path="/" element={<DashBoard />} /> */}
          <Route
            path="/profile"
            element={<ProtectedRoute Component={Profile} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
