import React from "react";
import product from "./product";
import Card from 'react-bootstrap/Card';


function Image() {
  return (
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.name}
      style={{ height: 200, objectFit: "cover" }}
    />
  );
}

export default Image;
