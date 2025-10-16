import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownButton,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from "./styles";

function Dropdown({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClickMenu = (tela) => {
    navigate(tela);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>Menu</DropdownButton>
      <DropdownContent $isOpen={isOpen}>
        <DropdownItem href="#option1" onClick={() => onClickMenu("/perfil")}>
          Perfil
        </DropdownItem>
        <DropdownItem href="#option2" onClick={() => onClickMenu("/cadastro")}>
          Histórico de pedidos
        </DropdownItem>
        <DropdownItem href="#option2" onClick={() => onClickMenu("/cadastro")}>
          Endereços
        </DropdownItem>
        <DropdownItem onClick={logout} href="#option3">
          Sair
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
}

export default Dropdown;
