import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; // Import for the hamburger menu icon
import CloseIcon from "@mui/icons-material/Close";
import { categories, products, Mycolors } from "../../data/Data";
import "../../pages/Home.css";
const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [originalSuggestions, setOriginalSuggestions] = useState([]); // Store original suggestions
  const [filteredSuggestions, setFilteredSuggestions] = useState([]); // Store filtered suggestions
  const [isFocused, setIsFocused] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu
  
  // Load suggestions on mount
  useEffect(() => {
    const allSuggestions = [
      ...products.map((prod) => prod.name),
      ...categories.map((cat) => cat.name),
      ...Mycolors.map((color) => color.name),
    ];
    setOriginalSuggestions(allSuggestions); // Save original suggestions
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
  };

  const handleNavigate = () => {
    navigate("/products", { replace: true });
    window.location.reload(); // Force page reload
  };

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchTerm(input);

    // Filter suggestions based on the input, but don't overwrite the original suggestions
    const filtered = originalSuggestions.filter((item) =>
      item.toLowerCase().includes(input)
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredSuggestions([]); // Clear suggestions after a selection
  };

  // Show all suggestions again when the input is focused
  const handleInputFocus = () => {
    setIsFocused(true);
    setFilteredSuggestions(originalSuggestions); // Reset suggestions to original
  };

  const handleInputBlur = () => {
    // Delay hiding the suggestions to allow click on suggestion
    setTimeout(() => setIsFocused(false), 200);
  };
  // Handle toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  };
  // Handle closing menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu if clicked outside
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  return (
    <header className={`header`} >
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 12,
          paddingBottom: 11.5,
          background: "#FFBB00",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 123,
              height: 16,
              textAlign: "center",
              color: "white",
              fontSize: 14,
              fontFamily: "Gilroy-Medium",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
           <Link style={{color:'white',textDecoration:'none'}} to={'/products'}>Yeni Kampaniyalar</Link> 
          </div>
          <div style={{ width: 16.5, height: 16.5, position: "relative" }}>
            <div
              style={{
                width: 11,
                height: 5.5,
                left: 2.75,
                top: -2,
                position: "absolute",
              }}
            >
              {" "}
              <TrendingFlatIcon style={{ color: "white" }} />{" "}
            </div>
          </div>
        </div>
      </div>

      <Container className="py-3 controls">
      <Row className="align-items-center justify-content-between d-flex">
          {/* Logo Section */}
          <Col md={2} sm={2} xs={2}>
            <a href="#" className="navbar-brand">
              <Link to="/">
                <img
                  src="/image/logo.png"
                  alt="Logo"
                  style={{ height: "40px" }}
                />
              </Link>
            </a>
          </Col>
          {/* təklifler məhsullar əlaqə */}
          <Col md={6} sm={3} className="d-none d-lg-block  desktop-links">
            <div
              className="links"
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
                // gap: 40,
                display: "inline-flex",
              }}
            >
              <div
              onClick={handleNavigate}
                style={{
                  height: 16,
                  cursor:'pointer',
                  textAlign: "center",
                  color: "#7F7F7F",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Xüsusi Təkliflər
              </div>
              <div
                onClick={handleNavigate}
                style={{
                  width: 72,
                  cursor: "pointer",
                  height: 16,
                  textDecoration: "none",
                  textAlign: "center",
                  color: "#7F7F7F",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Məhsullar
              </div>
              <Link
                to="/contact"
                style={{
                  width: 43,
                  height: 16,
                  textDecoration: "none",
                  textAlign: "center",
                  color: "#7F7F7F",
                  fontSize: 14,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Əlaqə
              </Link>
            </div>
          </Col>
          {/* Search Bar Section */}
          <Col md={9} lg={3} sm={9} xs={8}>
            <Form
              onSubmit={handleSearch}
              className="d-flex justify-content-center"
              style={{ position: "relative" }}
            >
              <InputGroup
                className="search-bar"
                style={{
                  maxWidth: "600px",
                  borderRadius: "50px",
                  overflow: "hidden",
                  outlineStyle:'none',
                  boxShadow: "none !important"
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Axtar..."
                  value={searchTerm}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus} // Show suggestions on focus
                  onBlur={handleInputBlur} // Hide suggestions after clicking outside
                  className="border-0"
                  style={{ backgroundColor: "#f5f5f5", outline: "none"}}
                />
                <Button
                  type="submit"
                  variant="outline-secondary"
                  className="border-0"
                  style={{ backgroundColor: "#f5f5f5",outline:'none' }}
                >
                  <SearchIcon />
                </Button>
              </InputGroup>

              {/* Suggestions Dropdown */}
              {isFocused && filteredSuggestions.length > 0 && (
                <div
                  className="suggestions-dropdown"
                  style={styles.suggestionsDropdown}
                >
                  {filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      style={styles.suggestionItem}
                      onMouseDown={() => handleSuggestionClick(suggestion)}
                    >
                      <SearchIcon
                        style={{ marginRight: "8px", color: "grey" }}
                      />
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </Form>
          </Col>
          {/* Hamburger Menu Toggle Icon for Mobile */}
          <Col xs={2} md={1} sm={1} className="d-lg-none">
            <button
              className="menu-toggle-btn"
              onClick={toggleMenu}
              style={{ background: "none", border: "none", fontSize: "24px" }}
            >
              {isMenuOpen ? <CloseIcon style={{color:'black'}}  /> : <MenuIcon style={{color:'black'}}  />}
            </button>
          </Col>

          {/* User Controls (Language, Login, Cart) */}
        </Row>
      </Container>
      <div
        className="collapse navbar-collapse  d-xl-flex container "
        id="navbarNav"
      >
        <ul
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
            flexDirection: "row",
          }}
          className="navbar-nav flex-wrap"
        >
          {categories.map((catgory) => (
            <li key={catgory.id} className="nav-item">
              <Link
                to={`/products/category/${catgory.name}`}
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
                className="nav-link"
              >
                {catgory.name}
              </Link>
            </li>
          ))}

          {/* Add more nav items as necessary */}
        </ul>
      </div>
      {/* Mobile Menu (Overlay or Slide Menu) */}
      {isMenuOpen && (
        <div ref={menuRef} className={`mobileMenu ${isMenuOpen ? "menu-slide-in" : "menu-slide-out"}`}>
          <div className="logoContainer p-3" style={styles.logoContainer}>
            <img src="/image/logo.png" alt="Logo" style={styles.logo} />
          </div>
          <ul style={styles.menuList}  className="menuList p-3" >
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#1E1E1E",
                  borderBottom: "1px #D1D1D8 solid",
                  borderTop: "1px #D1D1D8 solid",
                  padding: "10px 0",
                  display: "block",
                  width: "100%",
                  textDecoration: "none",
                }}
                to="/products"
                onClick={toggleMenu}
              >
                Xüsusi Təkliflər
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#1E1E1E",
                  borderBottom: "1px #D1D1D8 solid",
                  padding: "10px 0",
                  display: "block",
                  width: "100%",
                  textDecoration: "none",
                }}
                to="/products"
                onClick={toggleMenu}
              >
                Məhsullar
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#1E1E1E",
                  borderBottom: "1px #D1D1D8 solid",
                  fontFamily:'Space Grotesk',
                  fontSize: "18",
                  padding: "10px 0",
                  display: "block",
                  width: "100%",
                  textDecoration: "none",
                }}
                to="/contact"
                onClick={toggleMenu}
              >
                Əlaqə
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#1E1E1E",
                  padding: "10px 0",
                  borderBottom: "1px #D1D1D8 solid",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  display: "block",
                  width: "100%",
                  textDecoration: "none",
                }}
                to="/products"
                onClick={toggleMenu}
              >
                Kateqoriyalar
                <span style={styles.badge}>{products.length}</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
const styles = {

  logoContainer: {
    textAlign: "left",
    marginBottom: "20px",
  },
  logo: {
    width: "80px", // Adjust as per the logo size
  },
  menuList: {
    listStyleType: "none",
    padding: 0,
  },
  badge: {
    backgroundColor: "#FFC107", // The yellow color from the screenshot
    color: "#fff",
    borderRadius: "12px",
    padding: "2px 8px",
    fontSize: "12px",
    fontWeight: "bold",
    marginLeft:'10px'
  },
  suggestionsDropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    zIndex: 1000,
    maxHeight: "200px",
    overflowY: "auto",
  },
  suggestionItem: {
    padding: "10px 15px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eee",
  },
};
export default Header;
