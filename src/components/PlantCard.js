import React, { useState } from "react";

function PlantCard({id, image, name, price, onDeleteClick}) {
  const [inStock, setInStock] = useState(true)

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
      <button onClick={() => onDeleteClick(id)}>delete</button>
    </li>
  );
}

export default PlantCard;
