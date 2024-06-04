import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicial from '../TelaInicial';
import LoginPage from '../LoginPage';
import SignUp from '../SignUpPage';
import TelaHome from '../TelaHome';
import TelaListaDeRestaurantes from '../TelaListaDeRestaurantes';
import TelaDeCarrinho from '../TelaDeCarrinho';
import TelaDePerfil from '../TelaDePerfil';

// import { Container } from './styles'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TelaInicial />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/cadastro" element={<SignUp />} />
        <Route exact path="/home" element={<TelaHome />} />
        <Route
          exact
          path="/restaurantes/:id"
          element={<TelaListaDeRestaurantes />}
        />
        <Route exact path="/carrinho" element={<TelaDeCarrinho />} />
        <Route exact path="/perfil" element={<TelaDePerfil />} />
        <Route
          path="/"
          element={<h3>Eita Giovana, o forninho caiu (404)</h3>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
