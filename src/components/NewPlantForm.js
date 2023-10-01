import React, { useState } from "react";

function NewPlantForm({plants, setPlants}) {

  const [plantName, setPlantName] = useState("");
  const [plantURL, setPlantURL] = useState("");
  const [plantPrice, setPlantPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": plantName,
        "image": plantURL,
        "price": plantPrice
      })
    })
    .then(response => response.json())
    .then(newPlant => {
      const newPlantList = [...plants, newPlant];
      setPlants(newPlantList);
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setPlantName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setPlantURL(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPlantPrice(parseFloat(e.target.value))} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
