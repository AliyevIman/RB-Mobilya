
import React, { useState } from "react";
import "./SingleProduct.css";
import { Button, Form, Badge, Row, Col } from "react-bootstrap";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";
const ProductDetails = ({ product, selectedColor }) => {
  const [currentColor, setCurrentColor] = useState(
    selectedColor || product.colors[0]
  )
  ;

  const navigate = useNavigate();

  // Rəng dəyişildikdə yeni URL-yə keçid edilir
  const handleColorChange = (color) => {
    setCurrentColor(color);
    navigate(`/product/${product.id}/color/${color.name}`);
  };
  console.log(currentColor.image);

  // WhatsApp üçün mesaj hazırlamaq və göndərmək
  const sendToWhatsApp = () => {
    const message = `
      Məhsul: ${product.name}
      Qiymət: ${product.discountedPrice || product.price} ₼
      Rəng: ${currentColor.name}
      Şəkil: ${product.defaultImage} 
    `;
    const encodedMessage = encodeURIComponent(message); // URL-də düzgün şəkildə göstərilməsi üçün mesajı kodlayırıq
    const phoneNumber = "+994 55 210 96 50"; // Telefon nömrənizi bura əlavə edin
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank"); // WhatsApp linkini yeni tabda açır
  };
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        {product.discountedPrice ? (
          <>
            <span
              style={{
                textDecoration: "line-through",
                color: "gray",
                marginRight: "10px",
              }}
            >
              {product.price}₼
            </span>
            <span style={{ color: "orange", fontWeight: "bold" }}>
            {product.discountedPrice}₼
            </span>
          </>
        ) : (
          <div>
            <span>${product.price}</span>
          </div>
        )}
      </div>
      <p style={{ fontFamily: "Inter", color: "#7F7F7F" }}>
        {product.description}
      </p>

      <div className="product-colors">
        <h5>Məhsulun Rəngi</h5>
        <ul className="color-options2" style={{listStyle:'none'}}>
          {product.colors.map((color, index) => (
            <li key={index}>
              <button
                className={`color-swatch ${
                  currentColor.name === color.name ? "active" : ""
                }`}
                style={{ backgroundColor: color.code }}
                onClick={() => handleColorChange(color)}
              />
            </li>
          ))}
        </ul>
      </div>

      <Row className="delivery-stock-warranty-section my-3">
        {/* Delivery */}
        <Col xs={4} md={4} className="text-center">
          <div className="delivery-info">
            <div className="icon-container">
              <LocalShippingIcon style={{ fontSize: "56px", color: "#888" }} />
            </div>
            <div className="info-text">
              <p>Çatdırılma</p>
              <h6>1-2 gün</h6>
            </div>
          </div>
        </Col>

        {/* Stock */}
        <Col xs={4} md={4} className="text-center">
          <div className="stock-info">
            <div className="icon-container">
              <StoreIcon style={{ fontSize: "56px", color: "#888" }} />
            </div>
            <div className="info-text">
              <p>Stokdadır</p>
              <h6>{product.stock}</h6>
            </div>
          </div>
        </Col>

        {/* Warranty */}
        <Col xs={4} md={4} className="text-center">
          <div className="warranty-info">
            <div className="icon-container">
              <VerifiedIcon style={{ fontSize: "56px", color: "#888" }} />
            </div>
            <div className="info-text">
              <p>Qaranti</p>
              <h6>1 illik</h6>
            </div>
          </div>
        </Col>
      </Row>

      {/* Quantity control */}

      {/* Add to cart and wishlist buttons */}
      <div className="mt-3 " style={{ display: "flex" }}>
        <Button variant="success" className="me-2" onClick={sendToWhatsApp}>
          İndi sifariş et!
        </Button>
        {/* <div className="quantity-control">
        <Button onClick={() => handleQuantityChange('decrease')}>-</Button>
        <span className="mx-2">{quantity}</span>
        <Button onClick={() => handleQuantityChange('increase')}>+</Button>
      </div> */}
      </div>

      <div className="product-long-description mt-3 ">
        <h5>Ətraflı Məlumat</h5>
        <p
          style={{
            fontFamily: "Space Grotesk",
            color: "#7F7F7F",
            fontSize: 16,
            fontWeight: "400",
          }}
        >
          {product.longDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
