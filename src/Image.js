// src/Image.js
import React from 'react';
import product from './Product';

const Image = () => (
  <img src={product.path} alt={product.name} className="img-fluid rounded" />
);

export default Image;
