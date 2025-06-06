import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import "./Footer.css"; // Custom CSS for styling
import { Link } from "react-router-dom";

const Footer = () => {
  const sendToWhatsApp = () => {
    const message = `
      Salam, zəhmət olmasa 
    `;
    const encodedMessage = encodeURIComponent(message); // URL-də düzgün şəkildə göstərilməsi üçün mesajı kodlayırıq
    const phoneNumber = "+994 55 210 96 50"; // Telefon nömrənizi bura əlavə edin
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank"); // WhatsApp linkini yeni tabda açır
  };
  return (
    <>
      <footer className="footer bg-dark text-light py-5">
        <Container>
          <Row>
            {/* Logo Section */}
            <Col xs={12} md={3} className="mb-4">
              <Link to="/">
              <img
                  src="/image/Lider logo.png" 
                  alt="Logo"
                  className="footer-logo mb-3"
                />{" "}
                {/* Replace with your logo */}
              </Link>
            </Col>

            {/* Company Information */}
            <Col xs={12} md={3} className="mb-4">
              <h5 className="text-warning">Şirkət</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/contact">Haqqımızda</Link>
                </li>
                <li>
                  <Link to="/">Müştəri xidməti</Link>
                </li>
                <li>
                  <Link to="/">Vakansiyalar</Link>
                </li>
              </ul>
            </Col>

            {/* Legal & Information */}
            <Col xs={12} md={3} className="mb-4">
              <h5 className="text-warning">İnformasiyaya</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Kredit şərtləri</Link>
                </li>
                <li>
                  <Link to="/">Geri qaytarma şərtləri</Link>
                </li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col xs={12} md={3} className="mb-4">
              <h5 className="text-warning">Əlaqə</h5>
              <ul className="list-unstyled">
                <li>
                  Mobil nömrə: <a href="tel:+994552109650">+994 55 210 96 50</a>
                </li>
              </ul>
              <h5 className="text-warning">Sosial Medya</h5>
              <div className="social-icons">
                <p
                  onClick={sendToWhatsApp}
                  style={{ display: "inline-block", cursor: "pointer" }}
                >
                  <FaWhatsapp className="social-icon text-light mx-2" size={24} />
                </p>
                <a
                  href="https://www.instagram.com/rb_mobilya?igsh=Y255NTNzc2xiNjg="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-light mx-2 social-icon"  size={24} />
                </a>
                <a
                  href="https://www.facebook.com/share/1E4LeixZWX/?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="social-icon text-light mx-2" size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@rb_mobilya?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7442344200903869974"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="social-icon text-light mx-2" size={24} />
                </a>
              </div>
            </Col>
            {/* <Col xs={12} md={3} className="mb-4">

    
            </Col> */}
          </Row>

          {/* Footer Bottom Section */}
        </Container>
        {/* <Row>
          <Col className="text-center mt-4 ">
            <p className="footer-bottom-text bg-warning  py-2">
              Sədərək Ticarət Mərkəzi / Beton Yolu 12-ci sıra ilə üzbəüz, Baku, Azerbaijan
            </p>
          </Col>
        </Row> */}
      </footer>
      <div
        style={{ color: "white" }}
        className="footer-bottom bg-warning text-center py-2"
      >
        <a
          href="https://maps.app.goo.gl/fjj91akoGP6LYtSc8"
          target="_blank"
          style={{textDecoration:"none"}}
          rel="noopener noreferrer"
          className="text-light"
        >
          Sədərək Ticarət Mərkəzi / Beton Yolu 12-ci sıra ilə üzbə üz, Baku,
          Azerbaijan
        </a>
      </div>
    </>
  );
};

export default Footer;
