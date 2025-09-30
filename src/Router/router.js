import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Establishments from "../pages/Establishments";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";

// import { Container } from './styles'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/establishment/:id" element={<Establishments />} />
        <Route exact path="/carrinho" element={<Cart />} />
        <Route exact path="/perfil" element={<Profile />} />
        <Route
          path="/"
          element={<h3>Eita Giovana, o forninho caiu (404)</h3>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
