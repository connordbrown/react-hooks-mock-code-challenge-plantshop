import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [])

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
      <PlantList plants={plants} searchVal={searchVal} />
    </main>
  );
}

export default PlantPage;
