import React, { useEffect, useState } from "react";
import {
  CartButton,
  CartCounter,
  HeaderContainer,
  LogoButton,
  SingUpLink,
  UserUtilities,
} from "./styles";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import Cart from "../../Images/icons/cart.svg";
import Dropdown from "../Dropdown";

function Header({ orderLength = 0 }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    setCartCounter(orderLength);
  }, [orderLength, token]);

  return (
    <HeaderContainer>
      <LogoButton onClick={() => navigate("/home")}>
        <Logo $variant="small" />
      </LogoButton>
      <UserUtilities>
        {isLoggedIn ? (
          <Dropdown setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SingUpLink onClick={() => navigate("/login")}>Entrar</SingUpLink>
        )}

        <CartButton>
          <img src={Cart} alt="Carrinho" />
          {cartCounter === 0 ? <></> : <CartCounter>{cartCounter}</CartCounter>}
        </CartButton>
      </UserUtilities>
    </HeaderContainer>
  );
}

export default Header;
