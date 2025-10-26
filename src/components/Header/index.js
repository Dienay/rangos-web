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

/**
 * Header component
 * -----------------
 * Works differently depending on the current route:
 *  - On the home page ("/"): behaves as a global search with dropdown suggestions.
 *  - On an establishment page ("/establishment/:id"): acts as a local search filter.
 */

function Header({
  orderLength = 0, // number of items in the shopping bag
  products = [], // list of products available (global or local)
  establishments = [], // list of establishments (only used on the home page)
  establishment = {}, // establishment data for local search
  onSearch, // callback used only for store pages to filter local products
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // -----------------------------
  // STATE VARIABLES
  // -----------------------------

  // Get user authentication token from localStorage
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Bag counter (shows number of items)
  const [bagCounter, setBagCounter] = useState(orderLength);

  // Search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // Raw search results (before applying any delay)
  const [searchResults, setSearchResults] = useState([]);

  // Results currently shown in dropdown (controlled with animation)
  const [showResults, setShowResults] = useState([]);

  // Controls if dropdown is visible
  const [isOpen, setIsOpen] = useState(false);

  // Ref used to detect clicks outside the search box
  const searchRef = useRef(null);

  // Derived states
  const isLoggedIn = !!token; // user is logged in if token exists
  const isHomePage = location.pathname === "/"; // global search page
  const isEstablishmentPage = location.pathname.startsWith("/establishment/"); // local search page

  // -----------------------------
  // SIDE EFFECTS
  // -----------------------------

  /**
   * Watch for changes in localStorage token.
   * (Useful for login/logout in other tabs or logout via Dropdown)
   */
  useEffect(() => {
    const handleTokenChange = () => setToken(localStorage.getItem("token"));

    window.addEventListener("storage", handleTokenChange);
    return () => window.removeEventListener("storage", handleTokenChange);
  }, []);

  /**
   * Update shopping bag counter when orderLength changes.
   */
  useEffect(() => setBagCounter(orderLength), [orderLength]);

  /**
   * Handle global search (only runs on home page).
   * Filters products and establishments by the search term.
   */
  useEffect(() => {
    if (!isHomePage) return; // skip if not on home page

    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();

    // Filter products
    const filteredProducts = (products || [])
      .filter((product) => product.name.toLowerCase().includes(term))
      .map((product) => ({ ...product, type: "product" }));

    // Filter establishments
    const filteredEstablishments = (establishments || [])
      .filter((establishment) =>
        establishment.name.toLowerCase().includes(term),
      )
      .map((establishment) => ({ ...establishment, type: "establishment" }));

    // Combine both result sets
    setSearchResults([...filteredProducts, ...filteredEstablishments]);
  }, [searchTerm, isHomePage, products, establishments]);

  /**
   * Handle local search (only runs on store pages).
   * Sends the search term to parent component via callback.
   */
  useEffect(() => {
    if (isEstablishmentPage && onSearch) {
      onSearch(searchTerm);
    }
  }, [isEstablishmentPage, onSearch, searchTerm]);

  /**
   * Controls dropdown fluency (only on home page).
   * Uses a small timeout when clearing results for a smoother closing effect.
   */
  useEffect(() => {
    if (!isHomePage) return;

    if (searchTerm.trim().length > 0) {
      setShowResults(searchResults);
    } else {
      const timeout = setTimeout(() => setShowResults([]), 200);
      return () => clearTimeout(timeout);
    }
  }, [isHomePage, searchResults, searchTerm]);

  /**
   * Close dropdown when clicking outside of search container.
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * Close dropdown when pressing the ESC key.
   */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // -----------------------------
  // FUNCTIONS
  // -----------------------------

  /**
   * Navigate to a selected item (product or establishment)
   * and reset search state.
   */
  const navigateToItem = (item) => {
    if (item.type === "product") navigate(`/product/${item._id}`);
    if (item.type === "establishment") navigate(`/establishment/${item._id}`);
    setSearchTerm("");
    setSearchResults([]);
  };

  const formattedName =
    establishment?.name?.charAt(0).toUpperCase() +
    establishment?.name?.slice(1);

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <HeaderContainer>
      {/* Left: Brand logo */}
      <LogoContainer>
        <Logo $variant="base" />
      </LogoContainer>

      {/* Search bar (visible on home and store pages) */}
      {(isHomePage || isEstablishmentPage) && (
        <SearchContainer ref={searchRef}>
          <SearchInput
            type="text"
            placeholder={
              isHomePage
                ? "comida, produto ...ou estabelecimento"
                : `Procurar em ${formattedName || "esta loja"}`
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
          />

          {/* Dropdown only appears on home page */}
          {isHomePage && (
            <SearchDropdown $isOpen={isOpen && searchTerm.trim().length > 0}>
              {showResults.length > 0 ? (
                // Render result items
                showResults.map((item) => (
                  <SearchItem
                    key={`${item.type}-${item._id}`}
                    onClick={() => navigateToItem(item)}
                  >
                    <SearchItemImage
                      src={item.logo || item.productImage || DefaultImage}
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
                // No results message
                <SearchItemText style={{ padding: "1rem", color: "#888" }}>
                  Nenhum resultado encontrado
                </SearchItemText>
              ) : null}
            </SearchDropdown>
          )}
        </SearchContainer>
      )}

      {/* Right: User login and shopping bag */}
      <HeaderActions>
        {/* If logged in, show user dropdown */}
        {isLoggedIn ? (
          <Dropdown
            onLogout={() => {
              localStorage.removeItem("token");
              setToken(null);
            }}
          />
        ) : (
          // Otherwise show login link
          <SignUpLink to="/login">Entrar</SignUpLink>
        )}

        {/* Shopping bag section */}
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
