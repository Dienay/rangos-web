import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BagButton,
  HeaderContainer,
  LogoContainer,
  SignUpLink,
  SearchInput,
  HeaderActions,
  BuyInfo,
  BagCounter,
  SearchContainer,
  SearchDropdown,
  SearchItem,
  SearchItemImage,
  SearchItemText,
} from "./styles";
import Logo from "../Logo";
import BagIcon from "../../assets/icons/shopping-bag.svg";
import Dropdown from "../Dropdown";
import DefaultImage from "../../assets/logos/logo-rangos.svg";

function Header({ orderLength = 0, products = [], establishments = [] }) {
  const navigate = useNavigate();
  const location = useLocation();

  const token = window.localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [bagCounter, setBagCounter] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [showResults, setShowResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    setIsLoggedIn(!!token);
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

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setShowResults(searchResults);
    } else {
      setTimeout(() => setShowResults([]), 200);
    }
  }, [searchResults, searchTerm]);

  const navigateToItem = (item) => {
    if (item.type === "product") {
      navigate(`/product/${item._id}`);
    } else if (item.type === "establishment") {
      navigate(`/establishment/${item._id}`);
    }
    setSearchTerm("");
    setSearchResults([]);
  };

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo $variant="base" />
      </LogoContainer>
      {isHomePage && products.length > 0 && establishments.length > 0 && (
        <SearchContainer ref={searchRef}>
          <SearchInput
            type="text"
            placeholder="comida, produto ...ou estabelecimento"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
          />
          <SearchDropdown $isOpen={isOpen && searchTerm.trim().length > 0}>
            {showResults.length > 0 ? (
              showResults.map((item) => (
                <SearchItem
                  key={`${item.type}-${item._id}`}
                  onClick={() => navigateToItem(item)}
                >
                  <SearchItemImage
                    src={item.coverPhoto || DefaultImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = DefaultImage;
                    }}
                    alt={item.name}
                  />
                  <SearchItemText>{item.name}</SearchItemText>
                </SearchItem>
              ))
            ) : searchTerm.trim() ? (
              <SearchItemText style={{ padding: "1rem", color: "#888" }}>
                Nenhum resultado encontrado
              </SearchItemText>
            ) : null}
          </SearchDropdown>
        </SearchContainer>
      )}
      <HeaderActions>
        {isLoggedIn ? (
          <Dropdown setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUpLink to="/login">Entrar</SignUpLink>
        )}

        <BuyInfo>
          <BagButton>
            <img src={BagIcon} alt="Shopping bag" />
          </BagButton>
          {bagCounter > 0 && <BagCounter>{bagCounter}</BagCounter>}
        </BuyInfo>
      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;
