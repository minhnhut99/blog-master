import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
// import SignUp from "../pages/sign_up/SignUp";
const Router = () => {
  const publicRoutes = () => (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
  return <BrowserRouter>{publicRoutes()}</BrowserRouter>;
};

export default Router;
