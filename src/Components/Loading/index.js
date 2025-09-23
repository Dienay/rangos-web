import React from "react";
import { ContainerLoading } from "./styles";
import Logo from "../../Images/logo-rangos-white.svg";

function Loading() {
  return (
    <ContainerLoading>
      <img src={Logo} alt="Logo Rangos" />
    </ContainerLoading>
  );
}

export default Loading;
