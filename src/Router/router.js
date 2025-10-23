import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Establishment from "../pages/Establishment";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

// import { Container } from './styles'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/establishment/:id" element={<Establishment />} />
        <Route exact path="/shopping-bag" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route
          path="/"
          element={<h3>Eita Giovana, o forninho caiu (404)</h3>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
