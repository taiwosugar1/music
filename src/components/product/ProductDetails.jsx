import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  return <h1>Viewing Product with ID: {productId}</h1>;
};

export default ProductDetail;