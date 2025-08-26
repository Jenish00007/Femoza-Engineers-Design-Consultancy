import React from 'react';
import iconImage from '../assets/icon-image.png';

const Logo = ({ className = "logo" }) => {
  return (
    <img 
      src={iconImage} 
      alt="Femoza Engineers & Design Consultancy Logo" 
      className={className}
      style={{ 
        width: '40px', 
        height: '40px',
        objectFit: 'contain'
      }}
    />
  );
};

export default Logo; 