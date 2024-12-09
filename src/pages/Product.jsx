import React, { useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.defaultImage);
  const [selectedColor, setSelectedColor] = useState(0);

 
 
  const handleColorChange = (images, index) => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]); // Use the first image of the selected color
    } else {
      setSelectedImage(product.defaultImage); // Fallback to the default image if no images are available
    }
    setSelectedColor(index);
  };

  return (
    <div className="product-card ">
    <Link to={`/product/${product.id}`}>
    <img style={{background:' linear-gradient(0deg, white 0%, white 100%)'}} src={selectedImage} alt={product.name} />
    </Link>
      <div className="card-body text-center">
      <h5 >{product.name}</h5>
      <p>{product.price} ₼</p>
      <div className="colors">
        {product.colors.map((color,index) => (
          <button
          className={`color-circle ${index === selectedColor ? 'active' : ''}`}
            key={color.name}
            style={{ backgroundColor: color.code }}
            onClick={() => handleColorChange(color.images,index)}
          ></button>
        ))}
      </div>
      </div>
     
      
    </div>
  );
};

export default Product;
