import React, { useEffect, useState } from "react";
import {
  BagButton,
  HeaderContainer,
  LogoButton,
  SingUpLink,
  UserUtilities,
  SearchInput,
  BuyInfo,
  BagDetails,
  BagPrice,
  BagCounter,
} from "./styles";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import BagIcon from "../../Images/icons/shopping-bag.svg";
import Dropdown from "../Dropdown";

function Header({ orderLength = 0 }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = window.localStorage.getItem("token");

  const [bagCounter, setBagCounter] = useState(0);
  useEffect(() => {
    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    setCartCounter(orderLength);
    setBagCounter(orderLength);
  }, [orderLength, token]);

  return (
    <HeaderContainer>
      <LogoButton onClick={() => navigate("/home")}>
        <Logo $variant="small" />
      </LogoButton>
      <UserUtilities>
      </LogoLink>
      <SearchInput
        type="text"
        placeholder="comida, produto ...ou estabelecimento"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        {isLoggedIn ? (
          <Dropdown setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SingUpLink onClick={() => navigate("/login")}>Entrar</SingUpLink>
        )}

      </UserUtilities>
        <BuyInfo>
          <BagButton>
            <img src={BagIcon} alt="Shopping bag" />
          </BagButton>

          <BagDetails>
            <BagPrice>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(bagTotal)}
            </BagPrice>
            <BagCounter>{bagCounter} Itens</BagCounter>
          </BagDetails>
        </BuyInfo>
    </HeaderContainer>
  );
}

export default Header;
