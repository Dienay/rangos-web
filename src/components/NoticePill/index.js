import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CloseButton, PillContainer, PillText } from "./style";

function NoticePill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasClosed = localStorage.getItem("rangos_notice_closed");
    const token = localStorage.getItem("token");

    if (!hasClosed && !token) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("rangos_notice_closed", "true");
  };

  if (!visible) return null;

  return (
    <PillContainer>
      <PillText>
        Novo(a) no Rangos! <Link to="/register">Cadastre-se</Link>
      </PillText>
      <CloseButton onClick={handleClose}>X</CloseButton>
    </PillContainer>
  );
}

export default NoticePill;
