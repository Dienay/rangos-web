import React from "react";
import { ContainerTelaInicial } from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/logo.svg";

const token = window.localStorage.getItem("token");

function TelaInicial() {
  const navigate = useNavigate();

  if (token === null) {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  } else {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }

  return (
    <ContainerTelaInicial>
      <img src={Logo} alt="Logo Rappi4" />
    </ContainerTelaInicial>
  );
}

export default TelaInicial;
