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
  SearchContainer,
  SearchDropdown,
  SearchItem,
  SearchItemImage,
  SearchItemText,
} from "./styles";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import BagIcon from "../../Images/icons/shopping-bag.svg";
import Dropdown from "../Dropdown";
import DefaultImage from "../../Images/LogoDefault.png";

function Header({
  orderLength = 0,
  bagTotal = 0,
  products = [],
  establishments = [],
}) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = window.localStorage.getItem("token");

  const [bagCounter, setBagCounter] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    setCartCounter(orderLength);
    setBagCounter(orderLength);
  }, [orderLength, token]);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();

    const filteredProducts = products
      .filter((product) => product.name.toLowerCase().includes(term))
      .map((product) => ({ ...product, type: "product" }));

    const filteredEstablishments = establishments
      .filter((establishment) =>
        establishment.name.toLowerCase().includes(term),
      )
      .map((establishment) => ({ ...establishment, type: "establishment" }));

    setSearchResults([...filteredProducts, ...filteredEstablishments]);
  }, [searchTerm, products, establishments]);

  const navigateToItem = (item) => {
    if (item.type === "product") {
      navigate(`/product/${item._id}`);
    } else if (item.type === "establishment") {
      navigate(`/establishment/${item._id}`);
    }
    setSearchTerm("");
    setSearchResults([]);
  };
  return (
    <HeaderContainer>
      <LogoButton onClick={() => navigate("/home")}>
        <Logo $variant="small" />
      </LogoButton>
      <UserUtilities>
      </LogoLink>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="comida, produto ...ou estabelecimento"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchResults.length > 0 && (
            <SearchDropdown>
              {searchResults.map((item) => (
                <SearchItem
                  key={`${item.type}-${item.id}`}
                  onClick={() => navigateToItem(item)}
                >
                  <SearchItemImage
                    src={item.coverPhoto}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = DefaultImage;
                    }}
                    alt={item.name}
                  />
                  <SearchItemText>{item.name}</SearchItemText>
                </SearchItem>
              ))}
            </SearchDropdown>
          )}
        </SearchContainer>
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
