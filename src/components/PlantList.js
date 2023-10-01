import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchVal}) {
    let plantList;

    if (searchVal) {
      plantList = plants.filter(plant => {
        return plant.name.toLowerCase().includes(searchVal.toLowerCase());
      })
    } else {
      plantList = plants;
    }

    const plantsToView = plantList.map(plant => {
      return <PlantCard key={plant.id}
                        image={plant.image}
                        name={plant.name}
                        price={plant.price}
             />
    })

  return (
    <ul className="cards">{plantsToView}</ul>
  );
}

export default PlantList;
